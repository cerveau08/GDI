pipeline {
    /* choisir un slave Jenkins qui a le label php7 */
    agent  {
        label 'dst-preprod'
    }
    environment {
        EMAIL_RECIPIENTS = 'MoctarThiam.MBODJ@orange-sonatel.com, Madiagne.Sylla@orange-sonatel.com, Mohamed.SALL@orange-sonatel.com, malick.coly@orange-sonatel.com'
        IMAGE = 'registry.tools.orange-sonatel.com/dd/gdi-front'
        VERSION = readMavenPom().getVersion()
        NAME = readMavenPom().getArtifactId()
        SERVICE_NAME = "${ARTIFACT_ID}-db"
        PROJECT_ENV = 'gdi-front-preprod'
        ENV_APP = 'preprod'
    }
    tools {
        maven "Maven_3.3.9"
    }
    stages {
        stage('Installation des packets') {
            steps {
                sh 'set +ex ; export NVM_DIR="$HOME/.nvm"; . ~/.nvm/nvm.sh; . ~/.profile ; nvm use lts/erbium ;npm -g install; npm run build; set -ex'
                stash includes: '**/*', name: 'app'
            }
        }

        stage(' Build Docker image') {
            when {
                anyOf { branch 'cerv' }
            }
            steps {
                sh 'docker ps -qa -f name=${NAME} | xargs --no-run-if-empty docker rm -f'
                sh 'docker images -f reference=${IMAGE} -qa | xargs --no-run-if-empty docker rmi'
                sh 'docker build  --no-cache -t ${IMAGE}:${VERSION} .'
                sh 'docker push ${IMAGE}:${VERSION}'
            }
        }

        stage('Deploy IN Dev') {
            steps {
                sh 'docker run --name=${NAME} -d --restart=always --memory-reservation=256M --memory=512M -p 2051:22 -p 8051:80 ${IMAGE}:${VERSION}'
            }
        }
    }

    post {
        changed {
            emailext attachLog: true, body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT',  to: '$EMAIL_RECIPIENTS'
        }
        failure {
            emailext attachLog: true, body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT',  to: '$EMAIL_RECIPIENTS'
        }
    }
}
