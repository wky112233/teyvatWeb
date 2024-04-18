import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className={`${lusitana.className}`}>
      <h2 className={"p-3 text-2xl font-bold mb-2"}>Introduction</h2>
      <Divider className={"border-[0.5px] border-gray-500 mb-4"}></Divider>
      <Typography
        variant={"body1"}
        className={`${lusitana.className} mb-4 text-xl px-10`}
      >
        Our project aims to create a comprehensive guide to Teyvat for the game
        &quot;Genshin Impact&quot; developed by miHoYo, which is called
        &quot;Teyvat Wiki&quot;.
        <br />
        <br />
        &quot;Genshin Impact&quot; is an open-world adventure game developed by
        miHoYo, where players embark on adventures in the mysterious world of
        Teyvat. Teyvat boasts diverse landscapes, cultures, and creatures,
        attracting millions of players worldwide. The vastness and diversity of
        this game world provide rich material and challenges for our database
        project.
        <br />
        <br />
        We chose the Teyvat in &quot;Genshin Impact&quot; as the foundation for
        our database project because of its captivating game world and rich
        content, immersing players and providing abundant data sources for
        database design. By constructing a database about Teyvat, we can delve
        deeper into the details and internal logic of this virtual world,
        providing a better platform for players and researchers to understand
        and explore.
      </Typography>
      <h5 className={"p-3 text-2xl font-bold mb-2"}>Top level description</h5>
      <Divider className={"border-[0.5px] border-gray-500 mb-4"}></Divider>
      <Typography
        variant={"body1"}
        className={`${lusitana.className} mb-4 text-xl px-10`}
      >
        This database project aims to build a comprehensive database of the
        continent of Teyvat in the game &quot;Genshin Impact&quot. The database
        will include multiple categories such as characters, nations, regions,
        creatures, materials, and food, each with its own data tables. The
        database will provide rich information and attributes, including but not
        limited to names, descriptions, characteristics, and related tasks.
        Users will be able to easily browse and access various information about
        the continent of Teyvat through the database, thereby gaining a better
        understanding of the game world and planning their gaming experiences.
        <br />
        <br />
        Overall, this database will serve as a comprehensive resource for
        &quot;Genshin Impact&quot; players and researchers, helping them to
        delve deeper into and understand this mysterious and diverse virtual
        world.
      </Typography>
      <h4 className={"p-3 text-2xl font-bold mb-2"}>Things you can do:</h4>
      <Divider className={"border-[0.5px] border-gray-500 mb-4"}></Divider>
    </div>
  );
}
