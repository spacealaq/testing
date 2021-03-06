Puls4.Views.App = Backbone.View.extend({
	events : {
		"click .publicar"	:"showForm",
		"submit form" 		:"createPost",
		"click .logo" 		:"navigateHome"

	},
	navigateHome : function(){
		console.log('go to home');
		Backbone.history.navigate('/',{trigger:true})
	},
	initialize : function($el){
		this.$el = $el;
	},
	showForm : function(e){
		e.preventDefault();
		this.$el.find('form').toggle();
	},
	createPost : function(e){
		e.preventDefault();

		var titulo = $('input[name=titulo]').val();
		var tag = $('input[name=tag]').val();
		var autor = $('input[name=autor]').val();

		var data = {
			"title" : titulo,
			"user" : autor,
			"image" : "/imagenes/img4.jpg",
			"tag" : tag,
			"votes" : 0
		};

		var model = new Puls4.Models.Article(data);

		model.save();
		
	}
})