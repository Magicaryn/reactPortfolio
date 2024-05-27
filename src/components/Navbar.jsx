export default function Navbar ({ links }){
    return (
        <ul className="nav nav-pills">
            {links.map((link)=> link)}
        </ul>
    )
}