import { useState } from "react";
import { usePostTelephone } from "../hooks";

export const PhoneForm = () => {
  const { isPosting, addTelephone } = usePostTelephone();

  const [formData, setFormData] = useState({
    names: "",
    telephone: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTelephone(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            https://example.com/
          </span>
          <input
            type="text"
            id="form3Example1"
            name="image"
            className="form-control form-control-sm"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <label className="form-label" htmlFor="form3Example1">
          Your user image
        </label>
      </div>
      <div className="form-outline mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Jhon Doe
          </span>
          <input
            type="text"
            id="form3Example1"
            name="names"
            className="form-control form-control-sm"
            value={formData.names}
            onChange={handleChange}
          />
        </div>
        <label className="form-label" htmlFor="form3Example1">
          Your name
        </label>
      </div>
      <div className="form-outline mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            123456
          </span>
          <input
            type="number"
            id="form3Example1"
            name="telephone"
            className="form-control form-control-sm"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
        <label className="form-label" htmlFor="form3Example1">
          Your telephone
        </label>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleSubmit}
          type="submit"
          className="btn btn-success btn-lg btn-block"
          disabled={isPosting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PhoneForm;
