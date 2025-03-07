import React from 'react'

const UserChallenge = () => {
    const [name,setName]=useState("");
    const [people,setPeople]=useState(data);

    const handleChallenge=(e)=>{
        setName(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(name.length==0) return;
        const newPerson={
            id:new Date().getTime(),
            name,
        };
        setPeople([...people,newPerson])
        setName("");
    };
    function handleRemove(id){
        const newPeople=people.filter((person)=>person.id !==id);
        setPeople(newPeople);
    }
  return (
        <section>
            <h2>Form User Chaallenge</h2>
            <form>
                <div>
                    <label htmlFor='name' className='sr-only'>Full Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        className='input'
                        value={name}
                        onChange={handleChange}
                    />
                    <button className='btn'>Submit</button>
                </div>
            </form>
        </section>
  );

  };
export default UserChallenge ;