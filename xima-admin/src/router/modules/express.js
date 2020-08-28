/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const expressRouter = {
  path: '/express',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'express',
  meta: {
    title: '运费管理',
    icon: 'table'
  },
  children: [
    {
      path: 'default',
      component: () => import('@/pages/default/index'),
      name: 'default',
      meta: { title: '主页' }
    },
    {
      path: 'company',
      component: () => import('@/pages/default/index'),
      name: 'company',
      meta: { title: '快递公司' }
    },
    {
      path: 'warehouse',
      component: () => import('@/pages/warehouse/index'),
      name: 'warehouse',
      meta: { title: '仓库信息' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'Complex Table' }
    }
  ]
}
export default expressRouter
