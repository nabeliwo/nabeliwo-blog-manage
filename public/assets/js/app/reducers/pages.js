const initialState = [
  {
    name: 'ダッシュボード',
    url: '/'
  },
  {
    name: '記事を書く',
    url: '/post/create/'
  },
  {
    name: '記事の管理',
    url: '/posts/'
  },
  {
    name: 'カテゴリー',
    url: '/category/'
  },
  {
    name: 'タグ',
    url: '/tag/'
  },
  {
    name: 'アクセス解析',
    url: '/analysis/'
  },
  {
    name: 'Portfolio管理',
    url: '/portfolio/'
  },
  {
    name: 'About管理',
    url: '/about/'
  },
  {
    name: '設定',
    url: '/setting/'
  }
];

export default function pages(state = initialState) {
  return state;
}
