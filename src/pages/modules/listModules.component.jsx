import React, { useEffect, useState } from "react";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateModule,
  onUpdateModule,
  onDeleteModule,
} from "../../graphql/subscriptions";

// import ClassesNavbar from "./classesNavbar.component";
import ModulesNavbar from "./modulesNavbar.component";

// @mui Data Grid Pro and Material UI
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";

function ProcessModuleUpdate(row) {
  const { id, moduleName, moduleShortName } = row;
  const input = {
    id,
    moduleName,
    moduleShortName,
  };
  return (
    API.graphql(graphqlOperation(mutations.updateModule, { input })) &&
    row && { ...row, isNew: false }
  );
}

const ListModules = () => {
  const [modules, setModules] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    // Get all modules
    const fetchData = async () => {
      const modules = await API.graphql(
        graphqlOperation(queries.listModules, {
          // limit: 10,
          // order by className
          sortDirection: "DESC",
          sortField: "moduleShortName",
          nextToken: nextToken,
        })
      );
      setModules(modules.data.listModules.items);
      setNextToken(modules.data.listModules.nextToken);
      setTableData(modules.data.listModules.items);
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  console.log("modules", modules);

  // Update the tableData state when a new class is created
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateModule)
    ).subscribe({
      next: (eventData) => {
        const module = eventData.value.data.onCreateModule;
        const updatedModules = [...modules, module];
        setModules(updatedModules);
        setTableData(updatedModules);
      },
    });
    return () => subscription.unsubscribe();
  }, [modules]);

  // Update the tableData state when a module is updated
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateModule)
    ).subscribe({
      next: (eventData) => {
        const module = eventData.value.data.onUpdateModule;
        const updatedModules = modules.map((i) =>
          i.id === module.id ? module : i
        );
        setModules(updatedModules);
        setTableData(updatedModules);
      },
    });
    return () => subscription.unsubscribe();
  }, [modules]);

  // Update the tableData state when a class is deleted
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteModule)
    ).subscribe({
      next: (eventData) => {
        const module = eventData.value.data.onDeleteModule;
        const updatedModules = modules.filter((i) => i.id !== module.id);
        setModules(updatedModules);
        setTableData(updatedModules);
      },
    });
    return () => subscription.unsubscribe();
  }, [modules]);

  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.startRowEditMode({ id });
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id });
  };

  /*   const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  }; */

  const handleCancelClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  const columns = [
    //  { field: "id", headerName: "ID", width: 100 },
    /* {
      field: "id",
      headerName: "ID",
      width: 10,
      editable: false,
    }, */
    {
      field: "moduleShortName",
      headerName: "Module Number",
      hideable: false,
      width: 175,
      editable: true,
    },
    {
      field: "moduleName",
      headerName: "Module Name",
      hideable: false,
      width: 575,
      editable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          /* <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />, */
        ];
      },
    },
  ];

  return (
    <div
      style={{
        height: 700,
        width: "100%",
        paddingTop: 100,
        paddingBottom: 100,
        margin: "auto",
        backgroundColor: "#272727",
      }}
    >
      <ModulesNavbar />
      <div
        style={{
          paddingBottom: 20,
        }}
      ></div>
      <Box
        sx={{
          height: "90%",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div style={{ width: "96%", height: "100%", paddingLeft: "2%" }}>
          <DataGridPro
            rows={tableData}
            getRowId={(row) => row.id}
            columns={columns}
            apiRef={apiRef}
            rowGroupingColumnMode="single"
            /* initialState={{
            rowGrouping: {
              model: INITIAL_GROUPING_COLUMN_MODEL,
            },
          }} */
            editMode="row"
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={ProcessModuleUpdate}
            onGridReady={(api) => {
              api.sizeColumnsToFit();
            }}
            components={{
              Toolbar: GridToolbar,
              LoadingOverlay: LinearProgress,
            }}
            loading={isLoading}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pagination
            experimentalFeatures={{
              newEditingApi: true,
              // rowGrouping: true,
              // warnIfFocusStateIsNotSynced: true,
            }}
            initialState={{
              // pinnedColumns: { left: ["moduleName"], right: ["actions"] },
              sorting: {
                sortModel: [{ field: "moduleShortName", sort: "asc" }],
              },
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default ListModules;
