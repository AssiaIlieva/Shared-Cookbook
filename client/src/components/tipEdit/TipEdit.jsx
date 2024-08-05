import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import tipsAPI from '../../api/tips-api';
import { useModal } from '../../contexts/ModalContext';

export default function TipEdit() {
  const navigate = useNavigate();
  const { tipId } = useParams();
  const { openModal, closeModal } = useModal();
  const [tip, setTip] = useState({
    heading: '',
    tipType: '',
    description: '',
    content: '',
    imageURL: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const result = await tipsAPI.getOne(tipId);
        setTip(result);
      } catch (error) {
        openModal(<div>{error.message}</div>);
      }
    })();
  }, [tipId, openModal]);

  const validate = (values) => {
    const errors = {};
    if (!values.heading) {
      errors.heading = 'Heading is required';
    }
    if (!values.tipType) {
      errors.tipType = 'Tip Type is required';
    }
    if (!values.description) {
      errors.description = 'Description is required';
    }
    if (!values.content) {
      errors.content = 'Content is required';
    }
    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
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
    } else {
      imageURL = tip.imageURL; // Запазваме старото изображение, ако типът не се променя
    }

    const formData = {
      ...values,
      imageURL,
    };

    openModal(
      <div className="modalContent">
        <h3>Confirmation</h3>
        <p>Are you sure you want to edit this tip?</p>
        <div className="buttonContainer">
          <button
            className="modal-button confirm-button"
            onClick={async () => {
              try {
                await tipsAPI.edit(tipId, formData);
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

  const changeHandler = (e) => {
    setTip((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Edit Tip</h1>
              </div>
              <div className="border" />
              <h2>Edit your tip</h2>
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Heading</span>
                    <input className="input_text" id="heading" name="heading" value={tip.heading} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Tip Type</span>
                    <select className="input_text" id="tipType" name="tipType" value={tip.tipType} onChange={changeHandler}>
                      <option value="" disabled>
                        Please, choose the tip type
                      </option>
                      <option value="Kitchen hacks">Hack</option>
                      <option value="Cooking Techniques">Technique</option>
                    </select>
                  </label>
                  <label>
                    <span>Short Description</span>
                    <textarea className="input_text" id="description" name="description" value={tip.description} onChange={changeHandler}></textarea>
                  </label>
                  <label>
                    <span>Content</span>
                    <textarea className="message" id="content" name="content" value={tip.content} onChange={changeHandler}></textarea>
                  </label>
                  <input type="submit" className="button" value="Edit Tip" />
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
