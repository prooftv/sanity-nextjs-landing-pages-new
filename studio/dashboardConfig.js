export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6363736b63d7844118061efc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-new-studio',
                  apiId: '8421bd4d-6cdd-491e-bbea-94aab2dc4e81'
                },
                {
                  buildHookId: '6363736b66855f41cb53b4a2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-new',
                  apiId: 'fbb936f1-0a3c-4381-84f4-2f58a908ec59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-nextjs-landing-pages-new',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-new.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
