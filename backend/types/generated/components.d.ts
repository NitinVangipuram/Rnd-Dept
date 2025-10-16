import type { Schema, Struct } from '@strapi/strapi';

export interface FacultyArray extends Struct.ComponentSchema {
  collectionName: 'components_faculty_arrays';
  info: {
    displayName: 'Array';
  };
  attributes: {
    Area: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faculty.array': FacultyArray;
    }
  }
}
