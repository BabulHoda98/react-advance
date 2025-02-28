const WhyUseState=()=>{
    let count=0;
    const handleClick=()=>{
        count++;
        console.log(count);
    }
    return(
        <section>
            <h1 className="text -2xl font-bold mb-4">Why we need useState?</h1>
            <p className="text-lg">Count:{count}</p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded inline-block mt-4 cursor-pointer" onClick={handleClick}>increment</button>
        </section>
    );
};

export default WhyUseState;
