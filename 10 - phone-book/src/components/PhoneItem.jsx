export const PhoneItem = ({ img, name, identify, telephone }) => {
  return (
    <tr className="fw-normal">
      <th>
        <img
          src={img}
          alt={identify}
          style={{ width: "45px", height: "45px" }}
        />
        <span className="ms-2">{name}</span>
      </th>
      <td className="align-middle">
        <span>{identify}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-success">{telephone}</span>
        </h6>
      </td>
      <td className="align-middle">
        <a href="#!" data-mdb-toggle="tooltip" title="Done">
          <i className="fa-solid fa-check me-3 text-success"></i>
        </a>
        <a href="#!" data-mdb-toggle="tooltip" title="Remove">
          <i className="fa-solid fa-trash text-warning"></i>
        </a>
      </td>
    </tr>
  );
};

export default PhoneItem;
