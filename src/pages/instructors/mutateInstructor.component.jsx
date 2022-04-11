import React, { useEffect, useState } from "react";

// AWS Amplify and GraphQL API, Queries, and Mutations for Instructor and Class many-to-many relationship
import { API, graphqlOperation } from "aws-amplify";
// queries for Instructor and Class many-to-many relationship
import {
  getInstructor,
  listInstructors,
  getClass,
  listClasss,
} from "../../graphql/queries";
// mutations for Class, Instructor, and ClassInfo many-to-many relationship
import {
  createInstructor,
  updateInstructor,
  deleteInstructor,
  createClass,
  updateClass,
  deleteClass,
  createClassInfo,
  updateClassInfo,
  deleteClassInfo,
} from "../../graphql/mutations";
// subscriptions for Class, Instructor, and ClassInfo many-to-many relationship
import {
  onCreateInstructor,
  onUpdateInstructor,
  onDeleteInstructor,
  onCreateClass,
  onUpdateClass,
  onDeleteClass,
  onCreateClassInfo,
  onUpdateClassInfo,
  onDeleteClassInfo,
} from "../../graphql/subscriptions";

// create mutation for Class, Instructor, and ClassInfo many-to-many relationship
