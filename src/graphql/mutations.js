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
      location
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
      location
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
      location
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
      location
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
      location
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
      location
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
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
                createdAt
                updatedAt
                moduleModuleInfoId
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
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
                createdAt
                updatedAt
                moduleModuleInfoId
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
export const createModuleTest = /* GraphQL */ `
  mutation CreateModuleTest(
    $input: CreateModuleTestInput!
    $condition: ModelModuleTestConditionInput
  ) {
    createModuleTest(input: $input, condition: $condition) {
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleInfoID
      testGrade
      testDate
      testType
      testEvent
      retestRaw
      useForGPA
      status
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleInfoID
      testGrade
      testDate
      testType
      testEvent
      retestRaw
      useForGPA
      status
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            classModuleInfoId
            instructorModuleInfoId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleInfoID
      testGrade
      testDate
      testType
      testEvent
      retestRaw
      useForGPA
      status
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
          currentClassID
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
                currentClassID
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
                createdAt
                updatedAt
              }
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
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
                createdAt
                updatedAt
                moduleModuleInfoId
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
          currentClassID
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
                currentClassID
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
                createdAt
                updatedAt
              }
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
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
                createdAt
                updatedAt
                moduleModuleInfoId
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
          currentClassID
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
                currentClassID
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
                createdAt
                updatedAt
              }
              class {
                id
                className
                shiftPeriod
                classConveneDate
                classProjectedDate
                building
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
                createdAt
                updatedAt
                moduleModuleInfoId
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
      status
      course
      school
      organization
      rateRank
      newAssession
      mandotoryStudy
      gpaw
      arbPending
      currentClassID
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
      status
      course
      school
      organization
      rateRank
      newAssession
      mandotoryStudy
      gpaw
      arbPending
      currentClassID
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
      status
      course
      school
      organization
      rateRank
      newAssession
      mandotoryStudy
      gpaw
      arbPending
      currentClassID
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
              moduleInfoID
              testGrade
              testDate
              testType
              testEvent
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
export const createModuleInfo = /* GraphQL */ `
  mutation CreateModuleInfo(
    $input: CreateModuleInfoInput!
    $condition: ModelModuleInfoConditionInput
  ) {
    createModuleInfo(input: $input, condition: $condition) {
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const updateModuleInfo = /* GraphQL */ `
  mutation UpdateModuleInfo(
    $input: UpdateModuleInfoInput!
    $condition: ModelModuleInfoConditionInput
  ) {
    updateModuleInfo(input: $input, condition: $condition) {
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const deleteModuleInfo = /* GraphQL */ `
  mutation DeleteModuleInfo(
    $input: DeleteModuleInfoInput!
    $condition: ModelModuleInfoConditionInput
  ) {
    deleteModuleInfo(input: $input, condition: $condition) {
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            currentClassID
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
            moduleInfoID
            testGrade
            testDate
            testType
            testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                moduleInfoID
                testGrade
                testDate
                testType
                testEvent
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
                classModuleInfoId
                instructorModuleInfoId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          moduleInfoID
          testGrade
          testDate
          testType
          testEvent
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
      classModuleInfoId
      instructorModuleInfoId
    }
  }
`;
export const createSetbackHistory = /* GraphQL */ `
  mutation CreateSetbackHistory(
    $input: CreateSetbackHistoryInput!
    $condition: ModelSetbackHistoryConditionInput
  ) {
    createSetbackHistory(input: $input, condition: $condition) {
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
export const updateSetbackHistory = /* GraphQL */ `
  mutation UpdateSetbackHistory(
    $input: UpdateSetbackHistoryInput!
    $condition: ModelSetbackHistoryConditionInput
  ) {
    updateSetbackHistory(input: $input, condition: $condition) {
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
export const deleteSetbackHistory = /* GraphQL */ `
  mutation DeleteSetbackHistory(
    $input: DeleteSetbackHistoryInput!
    $condition: ModelSetbackHistoryConditionInput
  ) {
    deleteSetbackHistory(input: $input, condition: $condition) {
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
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
      id
      studentID
      comment
      commentDate
      createdAt
      updatedAt
    }
  }
`;
