# Tech Context - הקשר טכנולוגי

## Stack טכנולוגי

### Frontend
- **React 18** - ספריית UI מרכזית
- **TypeScript** - טיפוסים סטטיים לאמינות הקוד
- **Vite** - כלי Build מהיר ומודרני
- **TailwindCSS** - עיצוב utility-first
- **Zustand** - ניהול State קל ומהיר
- **React Router** - ניווט וניתוב
- **React Hook Form** - ניהול טפסים
- **React Query/TanStack Query** - ניהול Server State
- **i18next** - תרגום ותמיכה ב-RTL

### 3D & Visualization
- **@react-three/fiber** - React binding ל-Three.js
- **@react-three/drei** - Helper components ל-R3F
- **Model Viewer** - Web component לצפייה במודלים (חלופה)
- **Three.js** - ספריית 3D מרכזית

### Backend & Database
- **Supabase** - BaaS מלא
  - PostgreSQL Database
  - Authentication
  - Real-time subscriptions
  - File Storage
  - Row Level Security (RLS)
  - Edge Functions

### Development Tools
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

### Deployment & Infrastructure
- **Vercel** - Frontend deployment
- **GitHub Actions** - CI/CD

## דרישות מערכת

### Node.js
- **Version**: 18.0.0 או חדש יותר
- **Package Manager**: npm או yarn

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Support
- iOS Safari 14+
- Chrome Mobile 90+

## משתני סביבה נדרשים

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
VITE_APP_NAME="Real Estate Marketing Management"
VITE_DEFAULT_LANGUAGE=he
VITE_SUPPORTED_LANGUAGES=he,en

# Features Flags
VITE_ENABLE_3D_MODELS=true
VITE_ENABLE_AI_INSIGHTS=true
VITE_ENABLE_REALTIME=true

# External Services (V2+)
VITE_OPENAI_API_KEY=your_openai_key
VITE_WHATSAPP_API_KEY=your_whatsapp_key
```

## מבנה מסד הנתונים

### Core Tables
```sql
-- Developers (יזמים)
CREATE TABLE developers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects (פרויקטים)
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  developer_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  address TEXT,
  city TEXT,
  description TEXT,
  status project_status DEFAULT 'planning',
  start_date DATE,
  end_date DATE,
  model_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Buildings (בניינים)
CREATE TABLE buildings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  floors_count INTEGER DEFAULT 0,
  model_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Floors (קומות)
CREATE TABLE floors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  number INTEGER NOT NULL,
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  units_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(building_id, number)
);

-- Units (דירות)
CREATE TABLE units (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  number TEXT NOT NULL,
  floor_id UUID REFERENCES floors(id) ON DELETE CASCADE,
  
  -- פרמטרים פיזיים
  built_area DECIMAL(8,2),
  garden_area DECIMAL(8,2),
  balcony_area DECIMAL(8,2),
  rooms_count INTEGER,
  unit_type unit_type_enum,
  model_type TEXT,
  directions TEXT[],
  is_front_facing BOOLEAN DEFAULT true,
  parking_spots INTEGER DEFAULT 0,
  storage_rooms INTEGER DEFAULT 0,
  
  -- תמחור
  marketing_price DECIMAL(12,2),
  linear_price DECIMAL(12,2),
  price_20_80 DECIMAL(12,2),
  
  -- סטטוס ואנשי קשר
  status unit_status DEFAULT 'available',
  buyer_name TEXT,
  sales_agent_id UUID REFERENCES auth.users(id),
  entry_date DATE DEFAULT CURRENT_DATE,
  
  model_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(floor_id, number)
);
```

### Supporting Tables
```sql
-- Users & Permissions
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  role user_role NOT NULL,
  developer_id UUID REFERENCES developers(id),
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tasks
CREATE TABLE tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES tasks(id),
  level INTEGER DEFAULT 0,
  status task_status DEFAULT 'todo',
  priority task_priority DEFAULT 'medium',
  assigned_to UUID REFERENCES auth.users(id),
  entity_type entity_type,
  entity_id UUID,
  due_date TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents
CREATE TABLE documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  mime_type TEXT,
  document_type document_type,
  entity_type entity_type,
  entity_id UUID,
  version INTEGER DEFAULT 1,
  parent_document_id UUID REFERENCES documents(id),
  tags TEXT[],
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Enums
```sql
CREATE TYPE user_role AS ENUM (
  'system_admin', 'developer', 'developer_employee', 
  'sales_agent', 'supplier'
);

CREATE TYPE project_status AS ENUM (
  'planning', 'in_construction', 'marketing', 'completed'
);

CREATE TYPE unit_type_enum AS ENUM (
  'regular', 'garden', 'penthouse', 'duplex', 'studio'
);

CREATE TYPE unit_status AS ENUM (
  'available', 'reserved', 'sold', 'frozen'
);

CREATE TYPE task_status AS ENUM (
  'todo', 'in_progress', 'review', 'done', 'cancelled'
);

CREATE TYPE task_priority AS ENUM (
  'low', 'medium', 'high', 'urgent'
);

CREATE TYPE entity_type AS ENUM (
  'project', 'building', 'floor', 'unit', 'developer'
);

CREATE TYPE document_type AS ENUM (
  'floor_plan', 'specification', 'marketing_material', 
  'legal_document', 'contract', 'visualization', 'other'
);
```

## Performance Considerations

### Database Optimizations
```sql
-- Indexes for better performance
CREATE INDEX idx_units_floor_id ON units(floor_id);
CREATE INDEX idx_units_status ON units(status);
CREATE INDEX idx_units_sales_agent ON units(sales_agent_id);
CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX idx_tasks_entity ON tasks(entity_type, entity_id);
CREATE INDEX idx_documents_entity ON documents(entity_type, entity_id);
```

### Frontend Optimizations
- **Code Splitting** - ועזה לייזי של רכיבים
- **Image Optimization** - דחיסה ו-lazy loading
- **Virtual Scrolling** - לרשימות ארוכות
- **Memoization** - לחישובים כבדים
- **Service Workers** - לקשינג נתונים

## Security Configuration

### Row Level Security Policies
```sql
-- Units access policy
CREATE POLICY "Users see units based on role" ON units
  FOR SELECT USING (
    CASE 
      WHEN auth.jwt() ->> 'role' = 'system_admin' THEN true
      WHEN auth.jwt() ->> 'role' = 'developer' THEN 
        project_id IN (
          SELECT p.id FROM projects p 
          WHERE p.developer_id = (auth.jwt() ->> 'developer_id')::uuid
        )
      WHEN auth.jwt() ->> 'role' = 'sales_agent' THEN 
        sales_agent_id = auth.uid()
      ELSE false
    END
  );
```

### File Storage Security
```sql
-- Storage bucket policies
INSERT INTO storage.policies (name, bucket_id, definition)
VALUES (
  'Documents access based on project access',
  'documents',
  'SELECT check_project_access(auth.uid(), (storage.foldername(name))[1]::uuid)'
);
```

## Development Setup

### Installation
```bash
# Clone repository
git clone <repository-url>
cd real-estate-marketing

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

### Available Scripts
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "lint:fix": "eslint . --ext ts,tsx --fix",
  "format": "prettier --write .",
  "type-check": "tsc --noEmit"
}
```

## Testing Strategy

### Unit Tests
- **Vitest** - מחליף Jest מהיר יותר
- **@testing-library/react** - בדיקות רכיבים
- **MSW** - Mock Service Worker לAPI mocking

### E2E Tests
- **Playwright** - בדיקות אוטומטיות מקצה לקצה
- **Chromatic** - Visual regression testing (עתידי)

### Database Tests
- **Supabase Local Development** - טסטים מקומיים
- **pg_prove** - בדיקות SQL functions 