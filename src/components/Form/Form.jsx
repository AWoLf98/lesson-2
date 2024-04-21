import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({getQuery}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    const { search } = evt.target.elements;
    if(!search.value.trim()) {
      return;
    }
    getQuery(search.value.trim());
    console.log(search.value.trim());
    return;
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
