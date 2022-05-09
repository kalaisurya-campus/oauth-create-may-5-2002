import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
function DataTableModels(props) {
    return (
        <div>
            <div
                className="car-type-list"
                style={{ height: "calc(100%-3.3rem)" }}
            >
                <DataTable
                    value={this.state.getCreatedata}
                    scrollable
                    scrollHeight="100%"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column
                        field="status"
                        header="Status"
                        body={this.statusTemplate}
                    ></Column>
                    <Column
                        field="action"
                        header="Actions"
                        body={this.actionTemplate}
                    ></Column>
                    <Column
                        field="id"
                        header="Car Make"
                        body={this.carMakes}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default DataTableModels;
