const MyInput = ({ label, ...input }) => 
(
    <div>
      <label htmlFor={input.id} >{label}</label>
      <input {...input} />
    </div>
)

export default MyInput