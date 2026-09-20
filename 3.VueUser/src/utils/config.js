const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '景点信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'景点信息',
							url:'/index/jingdianxinxiList'
						},
					]
				},
				{
					name: '美食信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'美食信息',
							url:'/index/meishixinxiList'
						},
					]
				},
				{
					name: '商品信息积分管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'商品信息',
							url:'/index/shangpinxinxiList'
						},
					]
				},
				{
					name: '旅游资讯管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'旅游资讯',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '酒店信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'酒店信息',
							url:'/index/jiudianxinxiList'
						},
					]
				},
				{
					name: '旅游攻略管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'旅游攻略',
							url:'/index/lvyougonglveList'
						},
					]
				},
				{
					name: '医疗服务站管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'医疗服务站',
							url:'/index/yiliaofuwuzhanList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "基于web的景区管理系统"
        } 
    }
}
export default config
