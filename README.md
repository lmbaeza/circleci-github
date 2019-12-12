# Integración Continua de CircleCI con Github

Prueba de Integración continua con Circleci en Github

### Configuración

1. Ir a la pagina [Circle CI](https://circleci.com/) -> Go to App, y registrarse con Github.

2. Elegir el proyecto y darle click al boton `Set Up Project`.

3. Elegir la configuración para el lenguaje determinado. 

4. Dentro del proyecto local agregar la carpeta `.circleci` y dentro de ella crear un fichero llamado `config.yml` donde se va agregar la configuración del paso anterior.

5. Cuando se tengan los testing corriengo localmente, hacer commit y ya automaticamente se ejecutaran los test en circleci.

### Restricciones de Seguridad

1. Ir a `Setting` en el repositorio de github.

2. Ir a `Branch` dentro de Setting.

3. Darle click al boton `add rule` de la sección `Branch protection rules`.

4. Seleccionar el branch al cual se le va aplicar la restricción.

5. Seleccionar la regla `Require status checks to pass before merging`

6. Y dentro de esa regla selecioné `ci/circleci: build`

7. y seleccionar `Include administrators`.

8. Realice este proceso para las ramas `master` y `develop` siguiendo la metodologia `git flow`.

# Bibliografia

[[1]](https://www.youtube.com/watch?v=CB7vnoXI0pE) The Coding Train (2019). CircleCI Part 1: Introduction to Unit Testing and Continuous Integration. [Video] Available at: https://www.youtube.com/watch?v=CB7vnoXI0pE.

[[2]](https://www.youtube.com/watch?v=S3QwafQEvSs&t) The Coding Train (2019). CircleCI Part 2: Unit Testing with Jest. [Video] Available at: https://www.youtube.com/watch?v=S3QwafQEvSs&t.

[[3]](https://www.youtube.com/watch?v=0OjEx2UzLUI&t=) The Coding Train (2019). CircleCI Part 3: Continuous Integration with GitHub. [Video] Available at: https://www.youtube.com/watch?v=0OjEx2UzLUI&t=.

[[4]](https://www.youtube.com/watch?v=Zu380IeA2Lk) The Coding Train (2019). CircleCI Part 4: Matrix Library Testing and Continuous Integration. [Video] Available at: https://www.youtube.com/watch?v=Zu380IeA2Lk.
