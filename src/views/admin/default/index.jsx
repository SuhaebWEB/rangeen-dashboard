import MiniCalendar from "components/calendar/MiniCalendar"; 
import TotalSpent from "views/admin/default/components/TotalSpent"; 

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
 
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable"; 
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <TaskCard />
      </div>

      {/* Tables & Charts */}

      <div className="col-span-full mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div className="col-span-full">
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Complex Table , Task & Calendar */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={tableDataComplex}
            />
          </div>
          <div className=" rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>

         
      </div>
    </div>
  );
};

export default Dashboard;
