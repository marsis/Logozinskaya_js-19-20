module.exports = function(grunt) {

  grunt.initConfig({
   
 sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.scss'],
          dest: 'dest/css/',
          ext: '.css'
        }]
      }
    },

     watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['src/css/*.scss'],
      tasks: ['sass'],
    },
    
  }
  });
 
 // grunt.loadNpmTasks('grunt-contrib-concat');
  
 // grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};