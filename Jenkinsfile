pipeline {
    agent any
    stages{
        stage('Clone') {
            steps{
                print "Clone"
                checkout([
                        $class : 'GitSCM',
                        branches : [[name : '*/main']],
                        userRemoteConfigs :[[
                            credentialsId : '76fb8aa3-686a-47ae-863a-772e8e12c160',
                            url : 'https://github.com/AnemoneTK/portfolio-v.1.git'
                        ]]
                    ])
                print "Clone Success"
            }
        }
        stage('Build') {
            steps {
                print "Build Docker project"
            }
        }
       
        stage('Testing') {
            steps {
                print "Test"
            }
        }
    }
}