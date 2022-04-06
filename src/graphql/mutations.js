/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const createModuleTest = /* GraphQL */ `
  mutation CreateModuleTest(
    $input: CreateModuleTestInput!
    $condition: ModelModuleTestConditionInput
  ) {
    createModuleTest(input: $input, condition: $condition) {
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
export const updateModuleTest = /* GraphQL */ `
  mutation UpdateModuleTest(
    $input: UpdateModuleTestInput!
    $condition: ModelModuleTestConditionInput
  ) {
    updateModuleTest(input: $input, condition: $condition) {
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
export const deleteModuleTest = /* GraphQL */ `
  mutation DeleteModuleTest(
    $input: DeleteModuleTestInput!
    $condition: ModelModuleTestConditionInput
  ) {
    deleteModuleTest(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createClassInfo = /* GraphQL */ `
  mutation CreateClassInfo(
    $input: CreateClassInfoInput!
    $condition: ModelClassInfoConditionInput
  ) {
    createClassInfo(input: $input, condition: $condition) {
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
export const updateClassInfo = /* GraphQL */ `
  mutation UpdateClassInfo(
    $input: UpdateClassInfoInput!
    $condition: ModelClassInfoConditionInput
  ) {
    updateClassInfo(input: $input, condition: $condition) {
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
export const deleteClassInfo = /* GraphQL */ `
  mutation DeleteClassInfo(
    $input: DeleteClassInfoInput!
    $condition: ModelClassInfoConditionInput
  ) {
    deleteClassInfo(input: $input, condition: $condition) {
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
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
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
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
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
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createModuleInfo = /* GraphQL */ `
  mutation CreateModuleInfo(
    $input: CreateModuleInfoInput!
    $condition: ModelmoduleInfoConditionInput
  ) {
    createModuleInfo(input: $input, condition: $condition) {
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
export const updateModuleInfo = /* GraphQL */ `
  mutation UpdateModuleInfo(
    $input: UpdateModuleInfoInput!
    $condition: ModelmoduleInfoConditionInput
  ) {
    updateModuleInfo(input: $input, condition: $condition) {
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
export const deleteModuleInfo = /* GraphQL */ `
  mutation DeleteModuleInfo(
    $input: DeleteModuleInfoInput!
    $condition: ModelmoduleInfoConditionInput
  ) {
    deleteModuleInfo(input: $input, condition: $condition) {
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
