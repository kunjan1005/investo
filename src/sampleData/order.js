export const orders = {
    columns: [
      {
        label: "Status",
        field: "status",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Product",
        field: "product",
        width: 270,
      },
      {
        label:<th className="date">Date</th>,
        field: "date",
        width: 270,
      },
      {
        label: "Customer",
        field: "customer",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "Quanity",
        field: "quantity",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Free",
        field: "free",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Overall price",
        field: "totalprice",
        sort: "disabled",
        width: 150,
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
        status:(<span className="customer-status status-open">Open</span>),
        product: "product 1",
        date:  <td className="created-date">2011/04/25</td>,
        customer: "Edinburgh",
        price: "1000$",
        quantity: "10",
        free:'1.5%',
        totalprice:"2000$",
        action: (
          <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        ),
      },
      {
        status:(<span className="customer-status status-filled">Filled</span>),
        product: "product 1",
        date:  <td className="created-date">2011/04/25</td>,
        customer: "Edinburgh",
        price: "1000$",
        quantity: "10",
        free:'1.5%',
        totalprice:"2000$",
        action: (
          <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        ),
      },
      {
        status:(<span className="customer-status status-canccelled">Canccelled</span>),
        product: "product 1",
        date: <td className="created-date">2011/04/25</td>,
        customer: "Edinburgh",
        price: "1000$",
        quantity: "10",
        free:'1.5%',
        totalprice:"2000$",
        action: (
          <span className="edit-icon-button">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        ),
      },
      
    ],
  };
  