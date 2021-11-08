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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      className
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
      createdAt
      updatedAt
    }
  }
`;
export const createStudentModuleRegistration = /* GraphQL */ `
  mutation CreateStudentModuleRegistration(
    $input: CreateStudentModuleRegistrationInput!
    $condition: ModelStudentModuleRegistrationConditionInput
  ) {
    createStudentModuleRegistration(input: $input, condition: $condition) {
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
      registrationDate
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentModuleRegistration = /* GraphQL */ `
  mutation UpdateStudentModuleRegistration(
    $input: UpdateStudentModuleRegistrationInput!
    $condition: ModelStudentModuleRegistrationConditionInput
  ) {
    updateStudentModuleRegistration(input: $input, condition: $condition) {
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
      registrationDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentModuleRegistration = /* GraphQL */ `
  mutation DeleteStudentModuleRegistration(
    $input: DeleteStudentModuleRegistrationInput!
    $condition: ModelStudentModuleRegistrationConditionInput
  ) {
    deleteStudentModuleRegistration(input: $input, condition: $condition) {
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
      registrationDate
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
export const updateModuleInfo = /* GraphQL */ `
  mutation UpdateModuleInfo(
    $input: UpdateModuleInfoInput!
    $condition: ModelmoduleInfoConditionInput
  ) {
    updateModuleInfo(input: $input, condition: $condition) {
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
export const deleteModuleInfo = /* GraphQL */ `
  mutation DeleteModuleInfo(
    $input: DeleteModuleInfoInput!
    $condition: ModelmoduleInfoConditionInput
  ) {
    deleteModuleInfo(input: $input, condition: $condition) {
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
