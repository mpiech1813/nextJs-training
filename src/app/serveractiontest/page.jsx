const { sayHello, addPost } = require("@/lib/actions");

const ServerActionTestPage = () => {
  const actionincomponent = async () => {
    "use server";
    console.log("it works");
  };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
