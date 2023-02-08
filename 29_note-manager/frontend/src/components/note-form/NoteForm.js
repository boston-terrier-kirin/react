import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { ValidatorService } from '../../services/validator';
import ButtonPrimary from '../button-primary/ButtonPrimary';
import FieldError from '../field-error/FieldError';
import style from './style.module.css';

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

const NoteForm = ({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    title: note?.title || '',
    content: note?.content || '',
  });

  const [formErrors, setFormErrors] = useState({
    // booleanは何も表示されないので、新規作成時に初期状態でエラーが画面に表示されない。
    // 更新時はundefinedにする。
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
  });

  const updateFormValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });

    validate(name, value);
  };

  const validate = (fieldName, fieldValue) => {
    const result = VALIDATOR[fieldName](fieldValue);

    setFormErrors((prev) => {
      return { ...prev, [fieldName]: result };
    });
  };

  const hasError = () => {
    for (const field in formErrors) {
      if (formErrors[field]) {
        return true;
      }
    }
    return false;
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && (
          <PencilFill className={style.icon} onClick={onClickEdit} />
        )}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill className={style.icon} onClick={onClickDelete} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        onChange={updateFormValue}
        value={formValues.title}
      />
      <FieldError message={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        name="content"
        className="form-control"
        rows={5}
        onChange={updateFormValue}
        value={formValues.content}
      />
      <FieldError message={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className={style.submit_btn}>
      <ButtonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={style.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-2">{title}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${style.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? (
          contentInput
        ) : (
          <pre style={{ fontFamily: 'inherit' }}>{note.content}</pre>
        )}
      </div>

      {onSubmit && submitBtn}
    </div>
  );
};

export default NoteForm;
