import { Container } from './';

export function Header() {
  return (
    <header className="bg-white relative shadow-sm h-[52px] mb-4">
    <Container className='flex justify-between items-center'>
      <div className="flex items-center">
        <div className="bg-pink-500 text-white font-bold rounded-full h-[35px] w-[35px] flex items-center justify-center mr-2">
          M
        </div>
        <div className="text-pink-500 font-semibold">HundredModels</div>
      </div>
      <div>Menu</div>
      <div>Profile Data / Login</div>
      </Container>
    </header>
  );
}
