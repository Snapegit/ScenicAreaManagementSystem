<template>
	<div class="home_view">
		<div class="projectTitle">欢迎使用 {{projectName}}</div>
		<div class="count_list">
			<el-collapse-transition v-if="btnAuth('menpiaogoumai','首页总数')">
				<el-card v-show="countTypeList.closemenpiaogoumaiCountType" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								门票购买
							</div>
							<div class="card_head_right">
								<el-icon @click="countTypeClick('hiddenmenpiaogoumaiCountType')" class="showIcons"
									:class="countTypeList.hiddenmenpiaogoumaiCountType?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="countTypeClick('closemenpiaogoumaiCountType')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
							
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddenmenpiaogoumaiCountType">
							<div class="count_title">门票购买总数</div>
							<div class="count_num">{{menpiaogoumaiCount}}</div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiudianyuding','首页总数')">
				<el-card v-show="countTypeList.closejiudianyudingCountType" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								酒店预定
							</div>
							<div class="card_head_right">
								<el-icon @click="countTypeClick('hiddenjiudianyudingCountType')" class="showIcons"
									:class="countTypeList.hiddenjiudianyudingCountType?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="countTypeClick('closejiudianyudingCountType')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
							
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddenjiudianyudingCountType">
							<div class="count_title">酒店预定总数</div>
							<div class="count_num">{{jiudianyudingCount}}</div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('shangpinxinxi','首页总数')">
				<el-card v-show="countTypeList.closeshangpinxinxiCountType" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								商品信息
							</div>
							<div class="card_head_right">
								<el-icon @click="countTypeClick('hiddenshangpinxinxiCountType')" class="showIcons"
									:class="countTypeList.hiddenshangpinxinxiCountType?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="countTypeClick('closeshangpinxinxiCountType')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
							
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddenshangpinxinxiCountType">
							<div class="count_title">商品信息总数</div>
							<div class="count_num">{{shangpinxinxiCount}}</div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>
		<div class="card_list">
			<el-collapse-transition v-if="btnAuth('menpiaogoumai','首页统计')">
				<el-card v-show="cardTypeList.closemenpiaogoumaiChartType1" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								门票购买
							</div>
							<div class="card_head_right">
								<el-icon @click="cardTypeClick('hiddenmenpiaogoumaiChartType1')" class="showIcons"
									:class="cardTypeList.hiddenmenpiaogoumaiChartType1?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="cardTypeClick('closemenpiaogoumaiChartType1')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenmenpiaogoumaiChartType1">
							<div id="menpiaogoumaishuliangEchart1" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiudianyuding','首页统计')">
				<el-card v-show="cardTypeList.closejiudianyudingChartType1" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								酒店预定
							</div>
							<div class="card_head_right">
								<el-icon @click="cardTypeClick('hiddenjiudianyudingChartType1')" class="showIcons"
									:class="cardTypeList.hiddenjiudianyudingChartType1?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="cardTypeClick('closejiudianyudingChartType1')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiudianyudingChartType1">
							<div id="jiudianyudingyudingtianshuEchart1" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('shangpinxinxi','首页统计')">
				<el-card v-show="cardTypeList.closeshangpinxinxiChartType1" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								商品信息
							</div>
							<div class="card_head_right">
								<el-icon @click="cardTypeClick('hiddenshangpinxinxiChartType1')" class="showIcons"
									:class="cardTypeList.hiddenshangpinxinxiChartType1?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="cardTypeClick('closeshangpinxinxiChartType1')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenshangpinxinxiChartType1">
							<div id="shangpinxinxishuliangEchart1" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>
	</div>
</template>

<script setup>
	import {
		inject,
		nextTick,
		ref,
		getCurrentInstance
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
	const countTypeList = ref({
	})
	const getCountList=()=>{
		countTypeList.value.closemenpiaogoumaiCountType = true
		countTypeList.value.hiddenmenpiaogoumaiCountType = true
		if(btnAuth('menpiaogoumai','首页总数')){
			getmenpiaogoumaiCount()
		}
		countTypeList.value.closejiudianyudingCountType = true
		countTypeList.value.hiddenjiudianyudingCountType = true
		if(btnAuth('jiudianyuding','首页总数')){
			getjiudianyudingCount()
		}
		countTypeList.value.closeshangpinxinxiCountType = true
		countTypeList.value.hiddenshangpinxinxiCountType = true
		if(btnAuth('shangpinxinxi','首页总数')){
			getshangpinxinxiCount()
		}
	}
	const menpiaogoumaiCount = ref(0)
	const getmenpiaogoumaiCount = () => {
		context?.$http({
			url:'menpiaogoumai/count',
			method: 'get'
		}).then(res=>{
			menpiaogoumaiCount.value = res.data.data
		})
	}
	const jiudianyudingCount = ref(0)
	const getjiudianyudingCount = () => {
		context?.$http({
			url:'jiudianyuding/count',
			method: 'get'
		}).then(res=>{
			jiudianyudingCount.value = res.data.data
		})
	}
	const shangpinxinxiCount = ref(0)
	const getshangpinxinxiCount = () => {
		context?.$http({
			url:'shangpinxinxi/count',
			method: 'get'
		}).then(res=>{
			shangpinxinxiCount.value = res.data.data
		})
	}
	const countTypeClick = (e) => {
		countTypeList.value[e] = !countTypeList.value[e]
	}
	const init=()=>{
		getCountList()
		getCardList()
	}
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	let echarts = inject("echarts")
	const cardTypeClick = (e) =>{
		cardTypeList.value[e] = !cardTypeList.value[e]
		setTimeout(()=>{
			getCardList()
		},1000)
	}
	const cardTypeList = ref({
		closemenpiaogoumaiChartType1: true,
		hiddenmenpiaogoumaiChartType1: true,
		closejiudianyudingChartType1: true,
		hiddenjiudianyudingChartType1: true,
		closeshangpinxinxiChartType1: true,
		hiddenshangpinxinxiChartType1: true,
	})
	const getCardList = () => {
		if(btnAuth('menpiaogoumai','首页统计')){
			getmenpiaogoumaiChart1()
		}
		if(btnAuth('jiudianyuding','首页统计')){
			getjiudianyudingChart1()
		}
		if(btnAuth('shangpinxinxi','首页统计')){
			getshangpinxinxiChart1()
		}
	}
	const getmenpiaogoumaiChart1 = () => {
		nextTick(()=>{
			var shuliangEchart1 = echarts.init(document.getElementById("menpiaogoumaishuliangEchart1"),'macarons');
			context?.$http({
				url: `menpiaogoumai/value/jingdianmingcheng/shuliang`,
				method: "get",
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let pArray = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].jingdianmingcheng);
				    yAxis.push(parseFloat((res[i].total)));
				    pArray.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].jingdianmingcheng
				    })
				}
				var option = {};
                option = {
                    title: {
                        text: '景点参观人数',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel: {
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
				shuliangEchart1.clear()
				// 使用刚指定的配置项和数据显示图表。
				shuliangEchart1.setOption(option);
				//根据窗口的大小变动图表
				shuliangEchart1.resize();
			})
		})
	}
	const getjiudianyudingChart1 = () => {
		nextTick(()=>{
			var yudingtianshuEchart1 = echarts.init(document.getElementById("jiudianyudingyudingtianshuEchart1"),'macarons');
			context?.$http({
				url: `jiudianyuding/value/fangjianmingcheng/yudingtianshu`,
				method: "get",
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let pArray = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].fangjianmingcheng);
				    yAxis.push(parseFloat((res[i].total)));
				    pArray.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].fangjianmingcheng
				    })
				}
				var option = {};
                option = {
                    title: {
                        text: '酒店预定统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel: {
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
				yudingtianshuEchart1.clear()
				// 使用刚指定的配置项和数据显示图表。
				yudingtianshuEchart1.setOption(option);
				//根据窗口的大小变动图表
				yudingtianshuEchart1.resize();
			})
		})
	}
	const getshangpinxinxiChart1 = () => {
		nextTick(()=>{
			var shuliangEchart1 = echarts.init(document.getElementById("shangpinxinxishuliangEchart1"),'macarons');
			context?.$http({
				url: `shangpinxinxi/value/shangpinmingcheng/shuliang`,
				method: "get",
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let pArray = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].shangpinmingcheng);
				    yAxis.push(parseFloat((res[i].total)));
				    pArray.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].shangpinmingcheng
				    })
				}
				var option = {};
                option = {
                    title: {
                        text: '库存统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel: {
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
				shuliangEchart1.clear()
				// 使用刚指定的配置项和数据显示图表。
				shuliangEchart1.setOption(option);
				//根据窗口的大小变动图表
				shuliangEchart1.resize();
			})
		})
	}
	init()
</script>
<style lang="scss">
	.projectTitle{
		padding: 20px 0;
		margin: 20px 0 20px;
		font-weight: bold;
		display: flex;
		width: 100%;
		font-size: 24px;
		justify-content: center;
		align-items: center;
		height: auto;
	}

	.showIcons {
		transition: transform 0.3s;
		margin-right: 10px;
	}

	.showIcons1 {
		transform: rotate(-180deg);
	}
	
	// 总数盒子
	.count_list{
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		// 总数card
		.card_view {
			border: 1px solid #19a97b30;
			border-radius: 0;
			box-shadow: 0px 0px 0px rgba(0,0,0,.12);
			margin: 0 1% 20px;
			width: 23%;
			box-sizing: border-box;
			height: auto;
			// card头部
			.el-card__header {
				border: 0px solid #19a97b30;
				background: #19a97b10;
				width: 100%;
				border-width: 0 0 1px;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					height: 10px;
					// 标题
					.card_head_title {
						color: #666;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon {
							cursor: pointer;
							color: #aaa;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.count_item{
					padding: 30px;
					text-align: center;
					// 总数标题
					.count_title{
						color: #333;
						font-size: 16px;
						line-height: 2;
					}
					// 总数数字
					.count_num{
						color: #c00;
						font-size: 30px;
						line-height: 2;
					}
				}
			}
		}
	}
	// 首页盒子
	.home_view {
		border: 1px solid #196eab;
		padding: 0px 20px;
		margin: 0 auto 40px;
		overflow: hidden;
		background: url(http://clfile.zggen.cn/20240203/09a98f4852104a599055d47953ef0a23.png) no-repeat center top / 100% 100% !important;
		width: calc(100% - 40px) !important;
		min-height: 100vh;
		height: auto;
	}
	// 统计图盒子
	.card_list {
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		// 统计图card
		.card_view {
			border: 1px solid #19a97b30;
			border-radius: 0;
			box-shadow: 0px 0px 0px rgba(0,0,0,.12);
			margin: 0 1% 30px;
			width: 48%;
			box-sizing: border-box;
			height: auto;
			// 头部
			.el-card__header {
				border: 0px solid #19a97b30;
				background: #19a97b10;
				width: 100%;
				border-width: 0 0 1px;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					height: 10px;
					// 标题
					.card_head_title {
						color: #f00;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon{
							cursor: pointer;
							color: #aaa;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.card_item{
					padding: 30px;
					text-align: center;
				}
			}
		}
	}
</style>
