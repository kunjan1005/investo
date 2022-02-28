import pencil from "../images/logos/pencil.png";
import pencilBG from "../images/logos/editbg.png";
export const customers = {
  columns: [
    {
      label: "Prefix",
      field: "prefix",
      width: 150,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "Name",
      },
    },
    {
      label: "Name/Last name/Email",
      field: "name",
      width: 270,
    },
    {
      label: <th className="date">Created date</th>,
      field: "date",
      width: 200,
    },
    {
      label: "Nation iD",
      field: "nationId",
      width: 200,
    },
    {
      label: "Account",
      field: "account",
      sort: "asc",
      width: 100,
    },
    {
      label: "Phone number",
      field: "phone",
      sort: "disabled",
      width: 150,
    },
    {
      label: "Status",
      field: "status",
      sort: "disabled",
      width: 100,
    },
    {
      label: "Action",
      field: "action",
      sort: "disabled",
      width: 100,
    },
  ],
  rows: [
    {
      prefix: 56037,
      name: "Tiger Nixon",
      account: 5011234567,
      nationId: "УШ67172808",
      phone: 91216778,
      date: <td className="created-date">2011/04/25</td>,
      status: (
        <span className="customer-status status-registred">Registred</span>
      ),
      action: (
        <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
      ),
    },
    {
      prefix: 56038,
      name: "Tiger Nixon",
      account: 5011234567,
      nationId: "УШ67172808",
      phone: 91216778,
      date: <td className="created-date">2011/04/25</td>,
      status: (
        <span className="customer-status status-verifying">Verifying</span>
      ),
      action: (
        <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
      ),
    },
    {
      prefix: 56039,
      name: "Nixon",
      account: 5011234567,
      nationId: "УШ67172808",
      phone: 91216778,
      date: <td className="created-date">2011/04/25</td>,
      status: <span className="customer-status status-verified">Verified</span>,
      action: (
        <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
      ),
    },
    {
      prefix: 56039,
      name: "Nixon",
      account: 5011234567,
      nationId: "УШ67172808",
      phone: 91216778,
      date: <td className="created-date">2011/04/25</td>,
      status: <span className="customer-status status-delete">Deleted</span>,
      action: (
        <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
      ),
    },
  ],
};
