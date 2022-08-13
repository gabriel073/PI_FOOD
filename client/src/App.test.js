import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Link } from 'react-router-dom';
import NavBar from '../src/components/navBar/NavBar.js';

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<NavBar />);

  });
  it('Debería renderizar un <Link to="" />', () => {
    expect(nav.find(Link)).toHaveLength(1);
  });

  it('Debería renderizar un <Link to="" />  que vaya a "/recipes"', () => {

    expect(nav.find(Link).at(0).prop('to')).toEqual('/recipes');
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/recipes"', () => {

    expect(nav.find(Link).at(0).text()).toEqual("Home");
  });

  it('Debería tener un  video', () => {
    expect(nav.find("video")).toHaveLength(1);

  });
});


