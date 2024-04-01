import { useGetTelephones } from "../hooks";
import { PhoneItem, Loading } from "./";

export const PhoneList = () => {
  const { telephones, isLoading } = useGetTelephones();

  return (
    <div className="table-responsive rounded-2" style={{ maxHeight: "350px" }}>
      <table className="table table-dark text-white mb-0">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Identify</th>
            <th scope="col">Telephone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {isLoading && <Loading />}
          {telephones.map((telephone) => (
            <PhoneItem
              key={telephone.identify}
              img={telephone.image}
              name={telephone.names}
              identify={telephone.identify}
              telephone={telephone.telephone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhoneList;
