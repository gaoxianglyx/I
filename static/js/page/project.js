/*
* 研究成果
* @qingfan
*/
require.config({
	baseUrl:MIS.STATIC_ROOT
});
require(['lib/jquery', 'util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl){

	var product={

		init:function(){
	        
	        //$("#product_on .product_content").append(funcTpl(product.onTpl));
	        //$("#product_complete .product_content").append(funcTpl(product.comTpl));
		    product.mouse();
		    product.getOnData();
		    product.getComData();
		},

		mouse:function(){

			$(".add").hover(function(){
	            $(this).css("color","#444");
			},function(){
                $(this).css("color","#497d92");
			});
		},
        
		onTpl:function(){
	        
	        /*
	            {@each data.doingdachieve as item}
		        <div class="item">
		            
			        <span class="product_no h item_1">${item.type}</span>
			        <span class="manage h item_2">${item.leader}</span>
			        <span class="product_name h item_3">${item.title}</span>
			        <span class="date h item_4">${item.deadline}</span>
		        </div>
                {@/each}
	        */
		},
        
        getOnData:function(){
            request.post(
                _api.listallachieve,
                {},
                function(res){
                	console.log(res);
                	
                	$("#product_on .product_content").html(juicer(funcTpl(product.onTpl),res));
                }
            );
        },


		comTpl:function(){
              
              /*
              {@each data.completedachieve as comData}
	            <div class="item">
			        <span class="product_no h item_1">${comData.type}</span>
			        <span class="manage h item_2">${comData.leader}</span>
			        <span class="product_name h item_3">${comData.title}</span>
			        <span class="date h item_4">${comData.deadline}</span>
		        </div>
              
              {@/each}
              */
		},

		getComData:function(){
            request.post(
                _api.listallachieve,
                {},
                function(res){
                	
                	$("#product_complete .product_content").html(juicer(funcTpl(product.comTpl),res));
                }
            );
		}
	};

	return product.init();
});
