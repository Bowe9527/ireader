import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import styles from './IndexPage.less';
import BookShelf from '../components/BookShelf/BookShelf';


function IndexPage({ dispatch, list }) {
  function gotoUrl() {
    dispatch(routerRedux.push({
      pathname: '/bookstore',
    }));
  }
  return (
    <div className={styles.title}>
      <AppBar
        title="iReader"
        iconElementRight={
          <IconButton>
            <ActionSearch onClick={gotoUrl} />
          </IconButton>
        }
        titleStyle={{ textAlign: 'center' }}
      />
      <BookShelf dispatch={dispatch} list={list} />
      <div className={styles.add}>
        <FloatingActionButton iconStyle={{ width: 70, height: 70 }} style={{ width: 70, height: 70 }} onClick={gotoUrl}>
          <ContentAdd style={{ width: 40, height: 40, marginTop: 3 }} />
        </FloatingActionButton>
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  const { list } = state.bookShelf;
  return {
    loading: state.loading.models.bookShelf,
    list,
  };
}

export default connect(mapStateToProps)(IndexPage);

