// src/app/api/services/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Service ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    // Format the response
    const formattedService = {
      id: data.id,
      title_en: data.title_en || '',
      title_ar: data.title_ar || '',
      description_en: data.description_en || '',
      description_ar: data.description_ar || '',
      long_description_en: data.long_description_en || '',
      long_description_ar: data.long_description_ar || '',
      image: data.image || '',
      icon: data.icon || 'Beaker',
      category: data.category || 'families',
      
      // New dynamic fields
      duration: data.duration || '2-3 hours',
      participants_min: data.participants_min || 10,
      participants_max: data.participants_max || 30,
      participants_display: data.participants_min && data.participants_max 
        ? `${data.participants_min}-${data.participants_max}`
        : '10-30',
      schedule_type: data.schedule_type || 'flexible',
      schedule_type_en: getScheduleTypeText(data.schedule_type, 'en'),
      schedule_type_ar: getScheduleTypeText(data.schedule_type, 'ar'),
      location_type: data.location_type || 'on-site,online',
      location_type_en: getLocationTypeText(data.location_type, 'en'),
      location_type_ar: getLocationTypeText(data.location_type, 'ar'),
      age_group: data.age_group || '',
      price_range: data.price_range || '',
      features: data.features || [],
      
      created_at: data.created_at,
      updated_at: data.updated_at
    };

    return NextResponse.json(formattedService);
    
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message 
      }, 
      { status: 500 }
    );
  }
}

// Helper functions
function getScheduleTypeText(type: string, lang: 'en' | 'ar'): string {
  const schedules: Record<string, { en: string; ar: string }> = {
    'flexible': { en: 'Flexible', ar: 'مرنة' },
    'fixed': { en: 'Fixed Schedule', ar: 'جدول ثابت' },
    'customizable': { en: 'Customizable', ar: 'قابلة للتخصيص' },
    'weekdays': { en: 'Weekdays Only', ar: 'أيام الأسبوع فقط' },
    'weekends': { en: 'Weekends Only', ar: 'عطلات نهاية الأسبوع فقط' },
  };
  
  return schedules[type]?.[lang] || (lang === 'en' ? 'Flexible' : 'مرنة');
}

function getLocationTypeText(location: string, lang: 'en' | 'ar'): string {
  const locations = location?.split(',') || ['on-site', 'online'];
  
  const locationTexts: Record<string, { en: string; ar: string }> = {
    'on-site': { en: 'On-site', ar: 'في الموقع' },
    'online': { en: 'Online', ar: 'أونلاين' },
    'hybrid': { en: 'Hybrid', ar: 'مختلط' },
    'mobile': { en: 'Mobile', ar: 'متنقل' },
  };
  
  const texts = locations.map(loc => locationTexts[loc.trim()]?.[lang] || loc.trim());
  return texts.join(' / ');
}