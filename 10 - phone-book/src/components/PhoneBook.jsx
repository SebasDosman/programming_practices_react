import "./PhoneBook.css";
import { PhoneList, PhoneForm } from "./";

export const PhoneBook = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center row">
      <section className="col-md-6 gradient-custom-2 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Telephone"
                      width="60"
                    />
                    <h2 className="my-4">Telephone List</h2>
                  </div>

                  <PhoneList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="col-md-6 gradient-custom-2 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Telephone"
                      width="60"
                    />
                    <h2 className="my-4">Telephone Form</h2>
                  </div>

                  <PhoneForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneBook;
