import { createBoard } from '@wixc3/react-board';
import { PagewithNavigation } from '../../board-wrappers/page-with-navigation';

export default createBoard({
    name: 'App',
    Board: () => <PagewithNavigation />,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 14.046639231824416,
            bottom: 0,
        },
        windowWidth: 360,
        windowHeight: 740,
    },
});
