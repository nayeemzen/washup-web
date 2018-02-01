import eventBus from '../../events/EventBus';
import { withRouter } from 'react-router-dom;'

const RouteChangeEventListener = withRouter(({history}) => {
  eventBus.subscribe('CHANGE_ROUTE_EVENT', route => {
    history.push(route);
  });
});


