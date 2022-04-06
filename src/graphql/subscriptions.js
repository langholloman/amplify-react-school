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
export const onCreateModuleTest = /* GraphQL */ `
  subscription OnCreateModuleTest {
    onCreateModuleTest {
      id
      moduleSubject
      testDate
      testType
      testEvent
      testGrade
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModuleTest = /* GraphQL */ `
  subscription OnUpdateModuleTest {
    onUpdateModuleTest {
      id
      moduleSubject
      testDate
      testType
      testEvent
      testGrade
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModuleTest = /* GraphQL */ `
  subscription OnDeleteModuleTest {
    onDeleteModuleTest {
      id
      moduleSubject
      testDate
      testType
      testEvent
      testGrade
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
      shiftPeriod
      classConveneDate
      classProjectedDate
      instructors {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      shiftPeriod
      classConveneDate
      classProjectedDate
      instructors {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      shiftPeriod
      classConveneDate
      classProjectedDate
      instructors {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClassInfo = /* GraphQL */ `
  subscription OnCreateClassInfo {
    onCreateClassInfo {
      id
      classID
      instructorID
      class {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        instructors {
          nextToken
        }
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        role
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClassInfo = /* GraphQL */ `
  subscription OnUpdateClassInfo {
    onUpdateClassInfo {
      id
      classID
      instructorID
      class {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        instructors {
          nextToken
        }
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        role
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClassInfo = /* GraphQL */ `
  subscription OnDeleteClassInfo {
    onDeleteClassInfo {
      id
      classID
      instructorID
      class {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        instructors {
          nextToken
        }
        createdAt
        updatedAt
      }
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        role
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      role
      classes {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      role
      classes {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      role
      classes {
        items {
          id
          classID
          instructorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        items {
          id
          studentId
          moduleShortName
          moduleName
          className
          instructorLastName
          instructorFirstName
          examGrade
          examDate
          examType
          examEvent
          createdAt
          updatedAt
        }
        nextToken
      }
      currentClass
      mandotoryStudy
      status
      course
      school
      organization
      rateRank
      newAssession
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
        items {
          id
          studentId
          moduleShortName
          moduleName
          className
          instructorLastName
          instructorFirstName
          examGrade
          examDate
          examType
          examEvent
          createdAt
          updatedAt
        }
        nextToken
      }
      currentClass
      mandotoryStudy
      status
      course
      school
      organization
      rateRank
      newAssession
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
        items {
          id
          studentId
          moduleShortName
          moduleName
          className
          instructorLastName
          instructorFirstName
          examGrade
          examDate
          examType
          examEvent
          createdAt
          updatedAt
        }
        nextToken
      }
      currentClass
      mandotoryStudy
      status
      course
      school
      organization
      rateRank
      newAssession
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModuleInfo = /* GraphQL */ `
  subscription OnCreateModuleInfo {
    onCreateModuleInfo {
      id
      studentId
      moduleShortName
      moduleName
      className
      instructorLastName
      instructorFirstName
      examGrade
      examDate
      examType
      examEvent
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModuleInfo = /* GraphQL */ `
  subscription OnUpdateModuleInfo {
    onUpdateModuleInfo {
      id
      studentId
      moduleShortName
      moduleName
      className
      instructorLastName
      instructorFirstName
      examGrade
      examDate
      examType
      examEvent
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModuleInfo = /* GraphQL */ `
  subscription OnDeleteModuleInfo {
    onDeleteModuleInfo {
      id
      studentId
      moduleShortName
      moduleName
      className
      instructorLastName
      instructorFirstName
      examGrade
      examDate
      examType
      examEvent
      createdAt
      updatedAt
    }
  }
`;
