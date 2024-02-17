import { Link } from 'react-router-dom';

const Header = () => {
  return (
	<div className="sticky top-0 h-[100px] bg-secondary w-full text-primary p-[20px]">
		<div className="relative flex top-[50%] translate-y-[-50%] justify-between w-full">
			<h1 className="absolute left-0 top-[50%] translate-y-[-50%] font-bold text-[24px] tracking-[1.5px]">Game of Thrones Character Manager</h1>
			<div className="absolute right-0 top-[50%] translate-y-[-50%]">
				<Link className="hover-underline-animation text-primary" to="/">Home</Link>
			</div>
		</div>
	</div>
  )
}

export default Header