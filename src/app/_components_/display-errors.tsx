export const DisplayFormErrors = ({ errors }) => {
  return Object.keys(errors).length ? (
    <div className="mb-4 text-center">
      <p className="text-lg text-red-500">Il y a des erreurs dans le formulaire</p>
      {Object.keys(errors).length ? (
        <ul>
          {Object.keys(errors).map((key) => (
            <li className="text-red-500">
              {key} : {JSON.stringify(errors[key])}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  ) : null;
};
