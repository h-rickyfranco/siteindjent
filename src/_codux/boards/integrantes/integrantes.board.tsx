import { createBoard } from '@wixc3/react-board';
import { Integrantes } from '../../../components/integrantes/integrantes';

export default createBoard({
    name: 'Integrantes',
    Board: () => <Integrantes />,
    isSnippet: true,
});