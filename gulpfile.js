import gulp from "gulp";
import sonarqubeScanner from "sonarqube-scanner";

gulp.task("sonarqube", (callback) => {
  sonarqubeScanner(
    {
      serverUrl: "http://localhost:9000",
      token: "",
      options: {},
    },
    callback
  );
});

gulp.task("default", gulp.series("sonarqube"));
