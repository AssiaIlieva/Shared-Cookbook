import { useNavigate } from 'react-router-dom';

import { useCreateTip } from '../../hooks/useTips';
import { useModal } from '../../contexts/ModalContext';
import useForm from '../../hooks/useForm';

const initialValues = {
  heading: '',
  tipType: '',
  description: '',
  content: '',
};

export default function TipsCreate() {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const createTip = useCreateTip();

  const validate = (values) => {
    const errors = {};
    if (!values.heading.trim()) {
      errors.heading = 'Heading is required or cannot contain only spaces';
    }
    if (!values.tipType.trim()) {
      errors.tipType = 'Tip Type is required or cannot contain only spaces';
    }
    if (!values.description.trim()) {
      errors.description = 'Description is required or cannot contain only spaces';
    }
    if (!values.content.trim()) {
      errors.content = 'Content is required or cannot contain only spaces';
    }
    return errors;
  };

  const createHandler = async (values) => {
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      openModal(
        <div>
          <h3>Validation Errors</h3>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      );
      return;
    }

    let imageURL = '';

    if (values.tipType === 'Kitchen hacks') {
      imageURL = '/images/hack.png';
    } else if (values.tipType === 'Cooking Techniques') {
      imageURL = '/images/technique.png';
    }

    const formData = {
      ...values,
      imageURL,
    };

    openModal(
      <div className="modalContent">
        <h3>Confirmation</h3>
        <p>Do you want to create a new tip?</p>
        <div className="buttonContainer">
          <button
            className="modal-button confirm-button"
            onClick={async () => {
              try {
                const { _id: tipId } = await createTip(formData);
                navigate(`/tips/${tipId}/details`);
                closeModal();
              } catch (error) {
                openModal(<div>{error.message}</div>);
              }
            }}>
            Confirm
          </button>
          <button className="modal-button cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

  return (
    <div className="top-content">
      <div className="panel-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Create a Tip</h1>
              </div>
              <div className="border" />
              <h2>Share your tip</h2>
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <div className="form-group">
                    <label>
                      <span>Heading</span>
                      <input className="input_text" id="heading" name="heading" type="text" value={values.heading} onChange={changeHandler} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Tip Type</span>
                      <select className="input_text" id="tipType" name="tipType" value={values.tipType} onChange={changeHandler}>
                        <option value="" disabled>
                          Please, choose the tip type
                        </option>
                        <option value="Kitchen hacks">Hack</option>
                        <option value="Cooking Techniques">Technique</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Short Description</span>
                      <textarea
                        className="input_text"
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}></textarea>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Content</span>
                      <textarea className="message" id="content" name="content" value={values.content} onChange={changeHandler}></textarea>
                    </label>
                  </div>
                  <input type="submit" className="button" value="Create Tip" />
                </div>
              </form>
              <div className="clearing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
