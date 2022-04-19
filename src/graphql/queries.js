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
      moduleTest {
        items {
          id
          studentID
          moduleID
          module {
            id
            moduleName
            moduleShortName
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          instructorID
          instructor {
            id
            instructorFirstName
            instructorLastName
            instructorUsername
            role
            status
            classes {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          testGrade
          testDate
          testType
          retestRaw
          useForGPA
          status
          createdAt
          updatedAt
          moduleModuleTestId
        }
        nextToken
      }
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
        moduleTest {
          items {
            id
            studentID
            moduleID
            module {
              id
              moduleName
              moduleShortName
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            instructorID
            instructor {
              id
              instructorFirstName
              instructorLastName
              instructorUsername
              role
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            testGrade
            testDate
            testType
            retestRaw
            useForGPA
            status
            createdAt
            updatedAt
            moduleModuleTestId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModuleTest = /* GraphQL */ `
  query GetModuleTest($id: ID!) {
    getModuleTest(id: $id) {
      id
      studentID
      moduleID
      module {
        id
        moduleName
        moduleShortName
        moduleTest {
          items {
            id
            studentID
            moduleID
            module {
              id
              moduleName
              moduleShortName
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            instructorID
            instructor {
              id
              instructorFirstName
              instructorLastName
              instructorUsername
              role
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            testGrade
            testDate
            testType
            retestRaw
            useForGPA
            status
            createdAt
            updatedAt
            moduleModuleTestId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      instructorID
      instructor {
        id
        instructorFirstName
        instructorLastName
        instructorUsername
        role
        status
        classes {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleTest {
          items {
            id
            studentID
            moduleID
            module {
              id
              moduleName
              moduleShortName
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            instructorID
            instructor {
              id
              instructorFirstName
              instructorLastName
              instructorUsername
              role
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            testGrade
            testDate
            testType
            retestRaw
            useForGPA
            status
            createdAt
            updatedAt
            moduleModuleTestId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      testGrade
      testDate
      testType
      retestRaw
      useForGPA
      status
      createdAt
      updatedAt
      moduleModuleTestId
    }
  }
`;
export const listModuleTests = /* GraphQL */ `
  query ListModuleTests(
    $filter: ModelModuleTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModuleTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentID
        moduleID
        module {
          id
          moduleName
          moduleShortName
          moduleTest {
            items {
              id
              studentID
              moduleID
              module {
                id
                moduleName
                moduleShortName
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              instructorID
              instructor {
                id
                instructorFirstName
                instructorLastName
                instructorUsername
                role
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              testGrade
              testDate
              testType
              retestRaw
              useForGPA
              status
              createdAt
              updatedAt
              moduleModuleTestId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        instructorID
        instructor {
          id
          instructorFirstName
          instructorLastName
          instructorUsername
          role
          status
          classes {
            items {
              id
              classID
              instructorID
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
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
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          moduleTest {
            items {
              id
              studentID
              moduleID
              module {
                id
                moduleName
                moduleShortName
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              instructorID
              instructor {
                id
                instructorFirstName
                instructorLastName
                instructorUsername
                role
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              testGrade
              testDate
              testType
              retestRaw
              useForGPA
              status
              createdAt
              updatedAt
              moduleModuleTestId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        testGrade
        testDate
        testType
        retestRaw
        useForGPA
        status
        createdAt
        updatedAt
        moduleModuleTestId
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
      shiftPeriod
      classConveneDate
      classProjectedDate
      building
      room
      location
      status
      graduated
      offsiteClass
      classAdvisor
      instructors {
        items {
          id
          classID
          instructorID
          class {
            id
            className
            shiftPeriod
            classConveneDate
            classProjectedDate
            building
            room
            location
            status
            graduated
            offsiteClass
            classAdvisor
            instructors {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                studentUsername
                studentFirstName
                studentLastName
                status
                course
                school
                organization
                rateRank
                newAssession
                mandotoryStudy
                gpaw
                arbPending
                currentClass {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                setbackHistory {
                  items {
                    id
                    studentID
                    setbackDate
                    setbackFromClass
                    placedIntoClass
                    setbackReason
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                comments {
                  items {
                    id
                    studentID
                    comment
                    commentDate
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentId
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
                createdAt
                updatedAt
              }
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
            status
            classes {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          studentUsername
          studentFirstName
          studentLastName
          status
          course
          school
          organization
          rateRank
          newAssession
          mandotoryStudy
          gpaw
          arbPending
          currentClass {
            id
            className
            shiftPeriod
            classConveneDate
            classProjectedDate
            building
            room
            location
            status
            graduated
            offsiteClass
            classAdvisor
            instructors {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                studentUsername
                studentFirstName
                studentLastName
                status
                course
                school
                organization
                rateRank
                newAssession
                mandotoryStudy
                gpaw
                arbPending
                currentClass {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                setbackHistory {
                  items {
                    id
                    studentID
                    setbackDate
                    setbackFromClass
                    placedIntoClass
                    setbackReason
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                comments {
                  items {
                    id
                    studentID
                    comment
                    commentDate
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentId
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
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          setbackHistory {
            items {
              id
              studentID
              setbackDate
              setbackFromClass
              placedIntoClass
              setbackReason
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              studentID
              comment
              commentDate
              createdAt
              updatedAt
            }
            nextToken
          }
          moduleInfo {
            items {
              id
              studentId
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        building
        room
        location
        status
        graduated
        offsiteClass
        classAdvisor
        instructors {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            studentUsername
            studentFirstName
            studentLastName
            status
            course
            school
            organization
            rateRank
            newAssession
            mandotoryStudy
            gpaw
            arbPending
            currentClass {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            setbackHistory {
              items {
                id
                studentID
                setbackDate
                setbackFromClass
                placedIntoClass
                setbackReason
                createdAt
                updatedAt
              }
              nextToken
            }
            comments {
              items {
                id
                studentID
                comment
                commentDate
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentId
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClassInfo = /* GraphQL */ `
  query GetClassInfo($id: ID!) {
    getClassInfo(id: $id) {
      id
      classID
      instructorID
      class {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        building
        room
        location
        status
        graduated
        offsiteClass
        classAdvisor
        instructors {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            studentUsername
            studentFirstName
            studentLastName
            status
            course
            school
            organization
            rateRank
            newAssession
            mandotoryStudy
            gpaw
            arbPending
            currentClass {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            setbackHistory {
              items {
                id
                studentID
                setbackDate
                setbackFromClass
                placedIntoClass
                setbackReason
                createdAt
                updatedAt
              }
              nextToken
            }
            comments {
              items {
                id
                studentID
                comment
                commentDate
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentId
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
            createdAt
            updatedAt
          }
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
        status
        classes {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleTest {
          items {
            id
            studentID
            moduleID
            module {
              id
              moduleName
              moduleShortName
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            instructorID
            instructor {
              id
              instructorFirstName
              instructorLastName
              instructorUsername
              role
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            testGrade
            testDate
            testType
            retestRaw
            useForGPA
            status
            createdAt
            updatedAt
            moduleModuleTestId
          }
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
export const listClassInfos = /* GraphQL */ `
  query ListClassInfos(
    $filter: ModelClassInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classID
        instructorID
        class {
          id
          className
          shiftPeriod
          classConveneDate
          classProjectedDate
          building
          room
          location
          status
          graduated
          offsiteClass
          classAdvisor
          instructors {
            items {
              id
              classID
              instructorID
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
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
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              studentUsername
              studentFirstName
              studentLastName
              status
              course
              school
              organization
              rateRank
              newAssession
              mandotoryStudy
              gpaw
              arbPending
              currentClass {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              setbackHistory {
                items {
                  id
                  studentID
                  setbackDate
                  setbackFromClass
                  placedIntoClass
                  setbackReason
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                items {
                  id
                  studentID
                  comment
                  commentDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentId
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
              createdAt
              updatedAt
            }
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
          status
          classes {
            items {
              id
              classID
              instructorID
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
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
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          moduleTest {
            items {
              id
              studentID
              moduleID
              module {
                id
                moduleName
                moduleShortName
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              instructorID
              instructor {
                id
                instructorFirstName
                instructorLastName
                instructorUsername
                role
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              testGrade
              testDate
              testType
              retestRaw
              useForGPA
              status
              createdAt
              updatedAt
              moduleModuleTestId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
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
      role
      status
      classes {
        items {
          id
          classID
          instructorID
          class {
            id
            className
            shiftPeriod
            classConveneDate
            classProjectedDate
            building
            room
            location
            status
            graduated
            offsiteClass
            classAdvisor
            instructors {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                studentUsername
                studentFirstName
                studentLastName
                status
                course
                school
                organization
                rateRank
                newAssession
                mandotoryStudy
                gpaw
                arbPending
                currentClass {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                setbackHistory {
                  items {
                    id
                    studentID
                    setbackDate
                    setbackFromClass
                    placedIntoClass
                    setbackReason
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                comments {
                  items {
                    id
                    studentID
                    comment
                    commentDate
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentId
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
                createdAt
                updatedAt
              }
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
            status
            classes {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      moduleTest {
        items {
          id
          studentID
          moduleID
          module {
            id
            moduleName
            moduleShortName
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          instructorID
          instructor {
            id
            instructorFirstName
            instructorLastName
            instructorUsername
            role
            status
            classes {
              items {
                id
                classID
                instructorID
                class {
                  id
                  className
                  shiftPeriod
                  classConveneDate
                  classProjectedDate
                  building
                  room
                  location
                  status
                  graduated
                  offsiteClass
                  classAdvisor
                  instructors {
                    nextToken
                  }
                  students {
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
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleTest {
              items {
                id
                studentID
                moduleID
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                instructorID
                instructor {
                  id
                  instructorFirstName
                  instructorLastName
                  instructorUsername
                  role
                  status
                  classes {
                    nextToken
                  }
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                testGrade
                testDate
                testType
                retestRaw
                useForGPA
                status
                createdAt
                updatedAt
                moduleModuleTestId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          testGrade
          testDate
          testType
          retestRaw
          useForGPA
          status
          createdAt
          updatedAt
          moduleModuleTestId
        }
        nextToken
      }
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
        role
        status
        classes {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleTest {
          items {
            id
            studentID
            moduleID
            module {
              id
              moduleName
              moduleShortName
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            instructorID
            instructor {
              id
              instructorFirstName
              instructorLastName
              instructorUsername
              role
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            testGrade
            testDate
            testType
            retestRaw
            useForGPA
            status
            createdAt
            updatedAt
            moduleModuleTestId
          }
          nextToken
        }
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
      status
      course
      school
      organization
      rateRank
      newAssession
      mandotoryStudy
      gpaw
      arbPending
      currentClass {
        id
        className
        shiftPeriod
        classConveneDate
        classProjectedDate
        building
        room
        location
        status
        graduated
        offsiteClass
        classAdvisor
        instructors {
          items {
            id
            classID
            instructorID
            class {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
              status
              classes {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleTest {
                items {
                  id
                  studentID
                  moduleID
                  module {
                    id
                    moduleName
                    moduleShortName
                    createdAt
                    updatedAt
                  }
                  instructorID
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  testGrade
                  testDate
                  testType
                  retestRaw
                  useForGPA
                  status
                  createdAt
                  updatedAt
                  moduleModuleTestId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            studentUsername
            studentFirstName
            studentLastName
            status
            course
            school
            organization
            rateRank
            newAssession
            mandotoryStudy
            gpaw
            arbPending
            currentClass {
              id
              className
              shiftPeriod
              classConveneDate
              classProjectedDate
              building
              room
              location
              status
              graduated
              offsiteClass
              classAdvisor
              instructors {
                items {
                  id
                  classID
                  instructorID
                  class {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  instructor {
                    id
                    instructorFirstName
                    instructorLastName
                    instructorUsername
                    role
                    status
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  studentUsername
                  studentFirstName
                  studentLastName
                  status
                  course
                  school
                  organization
                  rateRank
                  newAssession
                  mandotoryStudy
                  gpaw
                  arbPending
                  currentClass {
                    id
                    className
                    shiftPeriod
                    classConveneDate
                    classProjectedDate
                    building
                    room
                    location
                    status
                    graduated
                    offsiteClass
                    classAdvisor
                    createdAt
                    updatedAt
                  }
                  setbackHistory {
                    nextToken
                  }
                  comments {
                    nextToken
                  }
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            setbackHistory {
              items {
                id
                studentID
                setbackDate
                setbackFromClass
                placedIntoClass
                setbackReason
                createdAt
                updatedAt
              }
              nextToken
            }
            comments {
              items {
                id
                studentID
                comment
                commentDate
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentId
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      setbackHistory {
        items {
          id
          studentID
          setbackDate
          setbackFromClass
          placedIntoClass
          setbackReason
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          studentID
          comment
          commentDate
          createdAt
          updatedAt
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentId
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
        status
        course
        school
        organization
        rateRank
        newAssession
        mandotoryStudy
        gpaw
        arbPending
        currentClass {
          id
          className
          shiftPeriod
          classConveneDate
          classProjectedDate
          building
          room
          location
          status
          graduated
          offsiteClass
          classAdvisor
          instructors {
            items {
              id
              classID
              instructorID
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
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
                status
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
                moduleTest {
                  items {
                    id
                    studentID
                    moduleID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                    moduleModuleTestId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              studentUsername
              studentFirstName
              studentLastName
              status
              course
              school
              organization
              rateRank
              newAssession
              mandotoryStudy
              gpaw
              arbPending
              currentClass {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
                room
                location
                status
                graduated
                offsiteClass
                classAdvisor
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
                students {
                  items {
                    id
                    studentUsername
                    studentFirstName
                    studentLastName
                    status
                    course
                    school
                    organization
                    rateRank
                    newAssession
                    mandotoryStudy
                    gpaw
                    arbPending
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              setbackHistory {
                items {
                  id
                  studentID
                  setbackDate
                  setbackFromClass
                  placedIntoClass
                  setbackReason
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                items {
                  id
                  studentID
                  comment
                  commentDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentId
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        setbackHistory {
          items {
            id
            studentID
            setbackDate
            setbackFromClass
            placedIntoClass
            setbackReason
            createdAt
            updatedAt
          }
          nextToken
        }
        comments {
          items {
            id
            studentID
            comment
            commentDate
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentId
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
      studentId
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
    $filter: ModelModuleInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModuleInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
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
export const getSetbackHistory = /* GraphQL */ `
  query GetSetbackHistory($id: ID!) {
    getSetbackHistory(id: $id) {
      id
      studentID
      setbackDate
      setbackFromClass
      placedIntoClass
      setbackReason
      createdAt
      updatedAt
    }
  }
`;
export const listSetbackHistories = /* GraphQL */ `
  query ListSetbackHistories(
    $filter: ModelSetbackHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSetbackHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentID
        setbackDate
        setbackFromClass
        placedIntoClass
        setbackReason
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentID
        comment
        commentDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
