/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      organizationName
      organizationShortName
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationName
        organizationShortName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      schoolName
      schoolShortName
      createdAt
      updatedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schoolName
        schoolShortName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      courseName
      courseShortName
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseName
        courseShortName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
      id
      moduleName
      moduleShortName
      createdAt
      updatedAt
    }
  }
`;
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moduleName
        moduleShortName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      className
      createdAt
      updatedAt
    }
  }
`;
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        className
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      studentUsername
      studentFirstName
      studentLastName
      moduleInfo {
        id
        moduleShortName
        moduleName
        className
        instructorLastName
        instructorFirstName
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentUsername
        studentFirstName
        studentLastName
        moduleInfo {
          id
          moduleShortName
          moduleName
          className
          instructorLastName
          instructorFirstName
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
      nextToken
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      id
      instructorFirstName
      instructorLastName
      instructorUsername
      createdAt
      updatedAt
    }
  }
`;
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModuleInfo = /* GraphQL */ `
  query GetModuleInfo($id: ID!) {
    getModuleInfo(id: $id) {
      id
      moduleShortName
      moduleName
      className
      instructorLastName
      instructorFirstName
      createdAt
      updatedAt
    }
  }
`;
export const listModuleInfos = /* GraphQL */ `
  query ListModuleInfos(
    $filter: ModelmoduleInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModuleInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moduleShortName
        moduleName
        className
        instructorLastName
        instructorFirstName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
