import MiniCalendar from "components/calendar/MiniCalendar";  

import { columnsDataCheck } from "./variables/columnsData";
 
import CheckTable from "views/admin/default/components/CheckTable"; 
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json"; 

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <MiniCalendar />
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
      </div>
    </div>
  );
};

export default Dashboard;
