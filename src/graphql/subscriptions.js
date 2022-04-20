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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModuleTest = /* GraphQL */ `
  subscription OnCreateModuleTest {
    onCreateModuleTest {
      id
      studentID
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModuleTest = /* GraphQL */ `
  subscription OnUpdateModuleTest {
    onUpdateModuleTest {
      id
      studentID
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModuleTest = /* GraphQL */ `
  subscription OnDeleteModuleTest {
    onDeleteModuleTest {
      id
      studentID
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
      student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
          classStudentId
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
      student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
          classStudentId
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
      student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
          classStudentId
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      moduleInfo {
        items {
          id
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      classStudentId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      classStudentId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
          studentID
          status
          module {
            id
            moduleName
            moduleShortName
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
            student {
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
                classStudentId
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleTest {
            items {
              id
              studentID
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
          moduleModuleInfoId
          moduleTestModuleInfoId
          classModuleInfoId
          instructorModuleInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      classStudentId
    }
  }
`;
export const onCreateModuleInfo = /* GraphQL */ `
  subscription OnCreateModuleInfo {
    onCreateModuleInfo {
      id
      studentID
      status
      module {
        id
        moduleName
        moduleShortName
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleTest {
        items {
          id
          studentID
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
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
      moduleModuleInfoId
      moduleTestModuleInfoId
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const onUpdateModuleInfo = /* GraphQL */ `
  subscription OnUpdateModuleInfo {
    onUpdateModuleInfo {
      id
      studentID
      status
      module {
        id
        moduleName
        moduleShortName
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleTest {
        items {
          id
          studentID
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
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
      moduleModuleInfoId
      moduleTestModuleInfoId
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const onDeleteModuleInfo = /* GraphQL */ `
  subscription OnDeleteModuleInfo {
    onDeleteModuleInfo {
      id
      studentID
      status
      module {
        id
        moduleName
        moduleShortName
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
        student {
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
            classStudentId
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        moduleInfo {
          items {
            id
            studentID
            status
            module {
              id
              moduleName
              moduleShortName
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
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
              student {
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
                  classStudentId
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              moduleInfo {
                items {
                  id
                  studentID
                  status
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
                  moduleTest {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  moduleModuleInfoId
                  moduleTestModuleInfoId
                  classModuleInfoId
                  instructorModuleInfoId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            moduleTest {
              items {
                id
                studentID
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
            moduleModuleInfoId
            moduleTestModuleInfoId
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleTest {
        items {
          id
          studentID
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
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
                  moduleInfo {
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
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            moduleInfo {
              items {
                id
                studentID
                status
                module {
                  id
                  moduleName
                  moduleShortName
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
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
                  student {
                    nextToken
                  }
                  moduleInfo {
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
                  moduleInfo {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                moduleTest {
                  items {
                    id
                    studentID
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
                moduleModuleInfoId
                moduleTestModuleInfoId
                classModuleInfoId
                instructorModuleInfoId
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
          moduleInfo {
            items {
              id
              studentID
              status
              module {
                id
                moduleName
                moduleShortName
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
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
                student {
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
                    classStudentId
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
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
                    instructorID
                    testGrade
                    testDate
                    testType
                    retestRaw
                    useForGPA
                    status
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                moduleInfo {
                  items {
                    id
                    studentID
                    status
                    createdAt
                    updatedAt
                    moduleModuleInfoId
                    moduleTestModuleInfoId
                    classModuleInfoId
                    instructorModuleInfoId
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              moduleTest {
                items {
                  id
                  studentID
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
              moduleModuleInfoId
              moduleTestModuleInfoId
              classModuleInfoId
              instructorModuleInfoId
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
      moduleModuleInfoId
      moduleTestModuleInfoId
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const onCreateSetbackHistory = /* GraphQL */ `
  subscription OnCreateSetbackHistory {
    onCreateSetbackHistory {
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
export const onUpdateSetbackHistory = /* GraphQL */ `
  subscription OnUpdateSetbackHistory {
    onUpdateSetbackHistory {
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
export const onDeleteSetbackHistory = /* GraphQL */ `
  subscription OnDeleteSetbackHistory {
    onDeleteSetbackHistory {
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
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
