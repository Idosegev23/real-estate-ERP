# System Patterns - דפוסי המערכת

## ארכיטקטורה כללית

### מבנה Frontend
```
src/
├── components/       # רכיבים נפוצים
│   ├── ui/          # רכיבי UI בסיסיים
│   ├── layout/      # רכיבי פריסה
│   └── features/    # רכיבי תכונות ספציפיות
├── pages/           # דפי האפליקציה
├── hooks/           # Custom hooks
├── stores/          # Zustand stores
├── utils/           # פונקציות עזר
├── types/           # הגדרות TypeScript
├── locales/         # קבצי תרגום
└── styles/          # קבצי CSS
```

### מבנה BIM היררכי
```typescript
interface Developer {
  id: string;
  name: string;
  projects: Project[];
}

interface Project {
  id: string;
  name: string;
  developer_id: string;
  buildings: Building[];
}

interface Building {
  id: string;
  name: string;
  project_id: string;
  floors: Floor[];
}

interface Floor {
  id: string;
  number: number;
  building_id: string;
  units: Unit[];
}

interface Unit {
  id: string;
  number: string;
  floor_id: string;
  // פרמטרים נוספים...
}
```

## דפוסי עיצוב מרכזיים

### 1. Hierarchical Navigation Pattern
- ניווט הדרגתי דרך ההיררכיה: יזם → פרויקט → בניין → קומה → דירה
- Breadcrumbs בכל עמוד להצגת המיקום הנוכחי
- אפשרות לקפיצה מהירה בין רמות

### 2. Multi-level Task Management
```typescript
interface Task {
  id: string;
  title: string;
  parent_id?: string; // null for root tasks
  children: Task[];
  level: number;
  status: TaskStatus;
  assigned_to: string;
  due_date?: Date;
  attachments: File[];
}
```

### 3. Document Management by BIM Level
```typescript
interface Document {
  id: string;
  name: string;
  type: DocumentType;
  level: 'developer' | 'project' | 'building' | 'floor' | 'unit';
  level_id: string;
  versions: DocumentVersion[];
  tags: string[];
}
```

### 4. Permission-based Data Filtering
```typescript
interface UserContext {
  role: UserRole;
  developer_id?: string;
  assigned_projects?: string[];
  assigned_units?: string[];
}

// Data filtering based on user context
const getAccessibleData = (user: UserContext) => {
  switch (user.role) {
    case 'system_admin': return getAllData();
    case 'developer': return getDeveloperData(user.developer_id);
    case 'sales_agent': return getAssignedUnitsData(user.assigned_units);
    // ...
  }
};
```

## State Management דפוסים

### 1. Feature-based Store Structure
```typescript
// stores/auth.ts
interface AuthStore {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

// stores/projects.ts
interface ProjectsStore {
  projects: Project[];
  currentProject: Project | null;
  setCurrentProject: (project: Project) => void;
  loadProjects: () => Promise<void>;
}

// stores/units.ts
interface UnitsStore {
  units: Unit[];
  filters: UnitFilters;
  updateUnit: (id: string, updates: Partial<Unit>) => Promise<void>;
  setFilters: (filters: UnitFilters) => void;
}
```

### 2. Optimistic Updates Pattern
```typescript
const updateUnitStatus = async (unitId: string, status: UnitStatus) => {
  // Optimistic update
  setUnits(prev => prev.map(unit => 
    unit.id === unitId ? { ...unit, status } : unit
  ));
  
  try {
    await supabase.from('units').update({ status }).eq('id', unitId);
  } catch (error) {
    // Revert on error
    setUnits(prev => prev.map(unit => 
      unit.id === unitId ? { ...unit, status: unit.previous_status } : unit
    ));
    throw error;
  }
};
```

## Real-time Updates דפוסים

### 1. Supabase Subscriptions
```typescript
useEffect(() => {
  const channel = supabase
    .channel('units_changes')
    .on('postgres_changes', 
      { event: 'UPDATE', schema: 'public', table: 'units' },
      (payload) => {
        updateUnitInStore(payload.new as Unit);
      }
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}, []);
```

### 2. Activity Feed Pattern
```typescript
interface Activity {
  id: string;
  type: ActivityType;
  user_id: string;
  entity_type: 'unit' | 'task' | 'document';
  entity_id: string;
  description: string;
  timestamp: Date;
}
```

## 3D Model Integration דפוסים

### 1. Lazy Loading Pattern
```typescript
const ModelViewer = ({ modelUrl }: { modelUrl: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <Suspense fallback={<ModelSkeleton />}>
      {isLoaded && <ThreeModel url={modelUrl} />}
    </Suspense>
  );
};
```

### 2. Interactive Hotspots
```typescript
interface ModelHotspot {
  position: [number, number, number];
  unitId: string;
  label: string;
  onClick: () => void;
}
```

## Performance Patterns

### 1. Virtual Scrolling for Large Lists
```typescript
const UnitsList = ({ units }: { units: Unit[] }) => {
  return (
    <VirtualizedList
      items={units}
      itemHeight={80}
      renderItem={({ item }) => <UnitCard unit={item} />}
    />
  );
};
```

### 2. Memoization for Heavy Calculations
```typescript
const useSalesMetrics = (units: Unit[]) => {
  return useMemo(() => {
    return calculateSalesMetrics(units);
  }, [units]);
};
```

## Security Patterns

### 1. Row Level Security (RLS)
```sql
-- דוגמה ל-RLS policy
CREATE POLICY "Users can only see their assigned units" ON units
  FOR SELECT USING (
    auth.uid() IN (
      SELECT user_id FROM user_assignments 
      WHERE unit_id = units.id
    )
  );
```

### 2. File Access Control
```typescript
const getSecureFileUrl = async (fileId: string, userId: string) => {
  const hasAccess = await checkFileAccess(fileId, userId);
  if (!hasAccess) throw new Error('Unauthorized');
  
  return supabase.storage.from('documents').createSignedUrl(fileId, 3600);
};
```

## Error Handling Patterns

### 1. Global Error Boundary
```typescript
const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundaryComponent
      fallback={<ErrorFallback />}
      onError={(error) => logError(error)}
    >
      {children}
    </ErrorBoundaryComponent>
  );
};
```

### 2. API Error Handling
```typescript
const apiCall = async <T>(fn: () => Promise<T>): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof ApiError) {
      showNotification(error.message, 'error');
    }
    throw error;
  }
};
``` 