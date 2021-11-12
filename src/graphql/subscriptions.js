/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModule = /* GraphQL */ `
  subscription OnCreateModule {
    onCreateModule {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModule = /* GraphQL */ `
  subscription OnUpdateModule {
    onUpdateModule {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModule = /* GraphQL */ `
  subscription OnDeleteModule {
    onDeleteModule {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      className
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
      id
      className
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
      id
      className
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      studentUsername
      studentFirstName
      studentLastName
      moduleInfo {
        id
        module {
          id
          moduleName
          moduleShortName
          createdAt
          updatedAt
        }
        class {
          id
          className
          createdAt
          updatedAt
        }
        instructor {
          id
          instructorFirstName
          instructorLastName
          instructorUsername
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      currentClass
      course
      school
      organization
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      studentUsername
      studentFirstName
      studentLastName
      moduleInfo {
        id
        module {
          id
          moduleName
          moduleShortName
          createdAt
          updatedAt
        }
        class {
          id
          className
          createdAt
          updatedAt
        }
        instructor {
          id
          instructorFirstName
          instructorLastName
          instructorUsername
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      currentClass
      course
      school
      organization
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      studentUsername
      studentFirstName
      studentLastName
      moduleInfo {
        id
        module {
          id
          moduleName
          moduleShortName
          createdAt
          updatedAt
        }
        class {
          id
          className
          createdAt
          updatedAt
        }
        instructor {
          id
          instructorFirstName
          instructorLastName
          instructorUsername
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      currentClass
      course
      school
      organization
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
      id
      instructorFirstName
      instructorLastName
      instructorUsername
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor {
    onUpdateInstructor {
      id
      instructorFirstName
      instructorLastName
      instructorUsername
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor {
    onDeleteInstructor {
      id
      instructorFirstName
      instructorLastName
      instructorUsername
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentModuleRegistration = /* GraphQL */ `
  subscription OnCreateStudentModuleRegistration {
    onCreateStudentModuleRegistration {
      id
      student {
        id
        studentUsername
        studentFirstName
        studentLastName
        moduleInfo {
          id
          createdAt
          updatedAt
        }
        currentClass
        course
        school
        organization
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      instructorLastName {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      course {
        id
        courseName
        courseShortName
        createdAt
        updatedAt
      }
      school {
        id
        schoolName
        schoolShortName
        createdAt
        updatedAt
      }
      organization {
        id
        organizationName
        organizationShortName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentModuleRegistration = /* GraphQL */ `
  subscription OnUpdateStudentModuleRegistration {
    onUpdateStudentModuleRegistration {
      id
      student {
        id
        studentUsername
        studentFirstName
        studentLastName
        moduleInfo {
          id
          createdAt
          updatedAt
        }
        currentClass
        course
        school
        organization
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      instructorLastName {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      course {
        id
        courseName
        courseShortName
        createdAt
        updatedAt
      }
      school {
        id
        schoolName
        schoolShortName
        createdAt
        updatedAt
      }
      organization {
        id
        organizationName
        organizationShortName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentModuleRegistration = /* GraphQL */ `
  subscription OnDeleteStudentModuleRegistration {
    onDeleteStudentModuleRegistration {
      id
      student {
        id
        studentUsername
        studentFirstName
        studentLastName
        moduleInfo {
          id
          createdAt
          updatedAt
        }
        currentClass
        course
        school
        organization
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      instructorLastName {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      course {
        id
        courseName
        courseShortName
        createdAt
        updatedAt
      }
      school {
        id
        schoolName
        schoolShortName
        createdAt
        updatedAt
      }
      organization {
        id
        organizationName
        organizationShortName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModuleInfo = /* GraphQL */ `
  subscription OnCreateModuleInfo {
    onCreateModuleInfo {
      id
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModuleInfo = /* GraphQL */ `
  subscription OnUpdateModuleInfo {
    onUpdateModuleInfo {
      id
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModuleInfo = /* GraphQL */ `
  subscription OnDeleteModuleInfo {
    onDeleteModuleInfo {
      id
      module {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      class {
        id
        className
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
